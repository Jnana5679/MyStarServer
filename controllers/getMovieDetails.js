const actorsFilmHistories = require("../mongoSchemas/actorsFilmHistories");
const actorsBios = require("../mongoSchemas/actorBiosSchema");

const GetMovieDetails = async (req, res) => {
  const { title, movieName } = req.query;
  try {
    const actorBio = await actorsBios.find({ actorName: `${title}` });
    if (actorBio.length > 0) {
      const listOfMoviesByActor = await actorsFilmHistories.find({
        actorId: `${actorBio[0].actorId.slice(0, -1)}`,
      });
      const filterMovieByTitle =
        listOfMoviesByActor[0].actorFilmsHistory.filter((eachMovie) => {
          if (eachMovie.title === movieName) return eachMovie;
        });
      res.status(200).send({ celebretiesList: filterMovieByTitle });
      return;
    } else {
      res.status(400).send({ error: `Not found` });
      return;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Oops something went wrong" });
  }
};

module.exports = GetMovieDetails;

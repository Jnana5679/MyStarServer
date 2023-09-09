const actorsBios = require("../mongoSchemas/actorBiosSchema");
const actorsFilmHistories = require("../mongoSchemas/actorsFilmHistories");

const MoviesActedByCelebreties = async (req, res) => {
  const { title } = req.query;
  try {
    const actorBio = await actorsBios.find({ actorName: `${title}` });
    if (actorBio.length > 0) {
      const moviesList = await actorsFilmHistories.find({
        actorId: `${actorBio[0].actorId.slice(0, -1)}`,
      });

      res.status(200).send({ celebretiesList: moviesList });
      return;
    } else {
      res.status(200).send({ celebretiesList: [] });
      return;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Oops something went wrong" });
  }
};

module.exports = MoviesActedByCelebreties;

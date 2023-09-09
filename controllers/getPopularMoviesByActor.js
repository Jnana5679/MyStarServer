const actorWellKnownFor = require("../mongoSchemas/actorWellKnownFor");

const GetPopularMoviesByActor = async (req, res) => {
  const { title } = req.query;
  try {
    const response = await actorWellKnownFor.find({ actorId: `${title}` });
    if (response) {
      return res.status(200).send({ celebretiesList: response });
    }
    res.status(400).send({ data: response });
  } catch (error) {
    console.log(error);
    console.log(error);
    res.status(500).send({ message: "Something went wrong" });
  }
};

module.exports = GetPopularMoviesByActor;

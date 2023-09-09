const actorsBios = require("../mongoSchemas/actorBiosSchema");

const GetActorDetails = async (req, res) => {
  const { title } = req.query;
  try {
    const actorDetails = await actorsBios.find({ actorName: `${title}` });
    if (actorDetails === []) {
      res.status(400).send({ message: "Details not found" });
      return;
    } else {
      res.status(200).send({ celebretiesList: actorDetails });
      return;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Oops something went wrong" });
  }
};

module.exports = GetActorDetails;

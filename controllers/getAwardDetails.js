const actorsBios = require("../mongoSchemas/actorBiosSchema");
const ActorAwardsSchema = require("../mongoSchemas/actorAwards");

const GetAwardDetails = async (req, res) => {
  try {
    const { title, movieName } = req.query;
    const actorBio = await actorsBios.findOne({ actorName: `${title}` });
    const actorId = actorBio.actorId;
    const actorAwardsList = await ActorAwardsSchema.findOne({
      actorId: `${actorId}`,
    });

    const { actorAwards } = actorAwardsList;

    const filteredResults = actorAwards.filter((eachAward) => {
      if (eachAward.awardNominationId === movieName) {
        return eachAward;
      }
    });

    res.status(200).send({ celebretiesList: filteredResults });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Oops something went wrong" });
  }
};

module.exports = GetAwardDetails;

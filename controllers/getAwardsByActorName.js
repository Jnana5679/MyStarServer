const actorsBios = require("../mongoSchemas/actorBiosSchema");
const ActorAwardsSchema = require("../mongoSchemas/actorAwards");

const GetAwardsByActorName = async (req, res) => {
  try {
    const { title } = req.query;
    const actorDetails = await actorsBios.findOne({ actorName: `${title}` });
    const actorId = actorDetails.actorId;
    const awardsList = await ActorAwardsSchema.findOne({
      actorId: `${actorId}`,
    });
    return res.status(200).send({ celebretiesList: awardsList });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong" });
  }
};

module.exports = GetAwardsByActorName;

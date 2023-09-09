const ActorImagesSchema = require("../mongoSchemas/actorImagesSchema");

const GetCelebretyGallery = async (req, res) => {
  const { title } = req.query;
  try {
    const response = await ActorImagesSchema.find({
      actorId: `${title}`,
    });
    if (response) {
      return res.status(200).send({ celebretiesList: response });
    }
    res.status(400).send({ celebretiesList: [] });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong" });
  }
};

module.exports = GetCelebretyGallery;

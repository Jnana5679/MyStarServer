const ActorImagesSchema = require("../mongoSchemas/actorImagesSchema");

const GetImageDetails = async (req, res) => {
  const { title, movieName } = req.query;
  try {
    const actorImagesList = await ActorImagesSchema.find({
      actorId: `${title}`,
    });
    const imageById = actorImagesList[0].actorImages.filter((eachImage) => {
      if (eachImage.id === movieName) {
        return eachImage;
      }
    });

    if (imageById) {
      res.status(200).send({ celebretiesList: imageById });
      return;
    }
    res.status(400).send({ error: "Not found" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Oops something went wrong" });
  }
};

module.exports = GetImageDetails;

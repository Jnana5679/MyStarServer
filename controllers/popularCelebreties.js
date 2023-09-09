const actorsBios = require("../mongoSchemas/actorBiosSchema");

const PopularCelebreties = async (req, res) => {
  try {
    const popularCelebreties = await actorsBios.find();
    if (popularCelebreties !== []) {
      res.status(200).send({ celebretiesList: popularCelebreties });
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

module.exports = PopularCelebreties;

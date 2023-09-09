const { format } = require("date-fns");

const actorsBios = require("../mongoSchemas/actorBiosSchema");

const CelebretiesWithBirthdayThisMonth = async (req, res) => {
  const todayDate = format(new Date(), "yyyy-MM-dd");
  try {
    const findCelebretiesHavingBirthDaysThisMonth = await actorsBios.find({
      actorBirthDay: { $regex: `${todayDate.slice(5, 7)}` },
    });
    if (findCelebretiesHavingBirthDaysThisMonth !== []) {
      var celebretiesList = [];
      for (var i = 0; i < findCelebretiesHavingBirthDaysThisMonth.length; i++) {
        const celebretyDOB =
          findCelebretiesHavingBirthDaysThisMonth[i].actorBirthDay;
        const formattedDate = format(new Date(`${celebretyDOB}`), "MMMM");
        if (
          format(new Date(`${todayDate.slice(5, 7)}`), "MMMM") === formattedDate
        ) {
          celebretiesList.push(findCelebretiesHavingBirthDaysThisMonth[i]);
        }
      }
      res.status(200).send({ celebretiesList: celebretiesList });
    } else {
      res.status(400).send({ error: "Not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Opps something went wrong" });
  }
};

module.exports = CelebretiesWithBirthdayThisMonth;

const Users = require("../models/UserMode");

const getUsersController = async (req, res) => {
  let query = {};
  if (req.query.ageStart && req.query.ageEnd) {
    const queryFlag = {...req.query}
    delete queryFlag.ageStart
    delete queryFlag.ageEnd

    query = {...queryFlag,age: { $gte: req.query.ageStart, $lte: req.query.ageEnd } };
  }

  const users = await Users.find().sort('age').limit(2).skip(1)

  res.json({
    status: true,
    message: "All Users Fetched Successfully",
    data: users,
  });
};

module.exports = { getUsersController };

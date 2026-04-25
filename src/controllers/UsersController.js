const Users = require("../models/UserMode");

const getUsersController = async (req, res) => {
  let query = {};
  if (req.query.ageStart && req.query.ageEnd) {
    query = {userName:req.query.userName, age: { $gte: req.query.ageStart, $lte: req.query.ageEnd } };
  }

  const users = await Users.find(query);

  res.json({
    status: true,
    message: "All Users Fetched Successfully",
    data: users,
  });
};

module.exports = { getUsersController };

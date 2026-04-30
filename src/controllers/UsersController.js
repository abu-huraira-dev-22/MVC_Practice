const Users = require("../models/UserMode");

const getUsersController = async (req, res) => {
  let query = {};
  if (req.query.ageStart && req.query.ageEnd) {
    const queryFlag = {...req.query}
    delete queryFlag.ageStart
    delete queryFlag.ageEnd

    query = {...queryFlag,age: { $gte: req.query.ageStart, $lte: req.query.ageEnd } };
  }

  const users = await Users.find()

  res.json({
    status: true,
    message: "All Users Fetched Successfully",
    data: users,
  });
};

const updateUserController = async(req,res)=>{
  const updateDetails = req.body
  const token = req.headers.authorization
  console.log(token,"==>> token")
}

module.exports = { getUsersController,updateUserController };

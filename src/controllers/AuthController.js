const jwt= require("jsonwebtoken");
const Users = require("../models/UserMode");

const signupController = async (req, res) => {
  try {
    const { userName, email, password, age } = req.body;
    if (!userName || !email || !password || !age)
      return res.json({
        status: false,
        message: "All Fields are required",
      });

    await Users.create(req.body);

    res.json({
      status: true,
      message: "User Signed up Successfully",
    });
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
    });
  }
};

const loginController = async (req, res) => {
 try {
   const { email, password } = req.body;
  const myUser = await Users.findOne({
    email: email,
  });

  if (!myUser) return res.json({
    status:false,
    message:"No User Found"
  });

  if (myUser.password != password) return res.json({
    status:false,
    message:"Invalid Credentials"
  });

  const token = jwt.sign({email:myUser.email,userName:myUser.userName,id:myUser._id}, process.env.JWT_SECRET)

  res.json({
    status: true,
    message: "User logged in Successfully",
    token:token
  });
 } catch (error) {
  console.log(error.message, "==>>> error")
 }
};

module.exports = { signupController, loginController };

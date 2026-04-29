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
  const { email, password } = req.body;
  const myUser = await Users.findOne({
    email: email,
  });

  if (!myUser) return res.json({
    status:false,
    message:"No User Found"
  });;

  if (myUser.password != password) return res.json({
    status:false,
    message:"Invalid Credentials"
  });

  res.json({
    status: true,
    message: "User logged in Successfully",
  });
};

module.exports = { signupController, loginController };

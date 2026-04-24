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
  res.json({
    status: true,
    message: "User logged in Successfully",
  });
};

module.exports = { signupController, loginController };

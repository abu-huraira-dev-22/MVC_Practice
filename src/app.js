const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const usersRoutes = require("./routes/UsersRoutes");

dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://huraira_db_user:huraira_db_user@cluster0.0mrqd3o.mongodb.net/",
  );
  console.log("Database is connceted");
}

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: true,
    message: "Backend is working properly",
  });
});

// Authentication
// Signup / Login

app.use("/api/v1/auth", authRoutes);

// Users
// get, add, update, delete
app.use("/api/v1/users", usersRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running at", process.env.PORT);
});

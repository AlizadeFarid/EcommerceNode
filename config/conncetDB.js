const mongoose = require("mongoose");

const connectDB = () => {
  try {
    const connection = mongoose.connect(process.env.MONGODB_URI);
    console.log("Connection Successfully");
  } catch (error) {
    console.log("Database error:", error);
  }
};

module.exports = connectDB;

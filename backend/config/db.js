const mongoose = require("mongoose");
const env = require("dotenv").config();
const mongoDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log("DB CONNECTED");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = mongoDB;

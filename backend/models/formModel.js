const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  name: { type: String },
  price: { type: String },
  Description: { type: String },
  image: { type: String },
});

module.exports = mongoose.model("products", formSchema);

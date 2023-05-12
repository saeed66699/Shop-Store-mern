const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  priceprice: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("product", userSchema);

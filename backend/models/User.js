const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  city: String,
  country: String,
});

module.exports = mongoose.model("User", UserSchema);
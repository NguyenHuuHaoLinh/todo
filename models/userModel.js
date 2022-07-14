const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sign");

const UserSchema = mongoose.Schema(
  {
    username: String,
    password: Number,
    active: Boolean,
    age: Number,
    mark: Number,
  },
  { collection: "user" }
);
const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;

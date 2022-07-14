const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sign");

const TodoSchema = mongoose.Schema(
  {
    name: String,
    deadline: Date,
    status: String,
  },
  { collection: "todo" }
);
const TodoModel = mongoose.model("todo", TodoSchema);

module.exports = TodoModel;

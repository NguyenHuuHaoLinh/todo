const express = require("express");
const router = express.Router();
const UserModel = require("../models/userModel");

// router.get("/:id", function (req, res) {
//   UserModel.findOne({
//     _id: req.params.id,
//   })
//     .then(function (data) {
//       console.log(data);
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// });
router.get("/", function (req, res) {
  UserModel.find()
    .then(function (data) {
      res.json(data);
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });
});
router.post("/create", function (req, res) {
  console.log(27, req.query);
  UserModel.create({
    username: req.query.username,
    password: req.query.password,
  })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});
module.exports = router;

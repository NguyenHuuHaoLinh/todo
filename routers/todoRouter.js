const router = require("express").Router();
const TodoModel = require("../models/TodoModel");

router.get("/", function (req, res) {
  TodoModel.find()
    .then(function (data) {
      res.json({ data });
    })
    .catch(function (err) {
      res.json({ err });
    });
});
router.post("/", function (req, res) {
  TodoModel.create({
    name: req.query.name,
    deadline: new Date(req.query.deadline).toString(),
    status: req.query.status,
  })
    .then(function (data) {
      res.json({ mess: " Thành công" });
    })
    .catch(function (err) {
      res.json({ mess: "Thất bại" });
    });
});

router.delete("/:id", function (req, res) {
  TodoModel.deleteOne({ _id: req.params.id })
    .then(function (data) {
      res.json({ mess: "thanh cong" });
    })
    .catch(function (err) {
      res.json({ mess: "that bai" });
    });
});
router.put("/:id", function (req, res) {
  console.log();
  TodoModel.updateOne(
    { _id: req.params.id },
    {
      name: req.body.newname,
      deadline: new Date(req.body.newdeadline).toString(),
      status: req.body.newstatus,
    }
  )
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;

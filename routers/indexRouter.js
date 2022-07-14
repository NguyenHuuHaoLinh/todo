const router = require("express").Router();
module.exports = router;
const path = require("path");

router.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/home.html"));
});
router.get("/signup", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/signup.html"));
});
router.get("/download", function (req, res) {
  res.download(
    path.join(
      __dirname,
      "../public/uploads/288131787_518795470041206_2111992155324724154_n.jpg"
    )
  );
});
router.get("/job", function (req, res) {
  res.sendFile(path.join(__dirname, "../views/todo.html"));
});

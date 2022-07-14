const express = require("express");
const app = express();
const path = require("path");
const UserRouter = require("./routers/userRouter");
const TodoRouter = require("./routers/todoRouter");
const IndexRouter = require("./routers/indexRouter");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "./public")));
app.use("/user", UserRouter);
app.use("/todo", TodoRouter);
app.use("/", IndexRouter);

app.listen(3000);

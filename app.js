const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

app.use("/", indexRouter);
app.use("/", newRouter);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
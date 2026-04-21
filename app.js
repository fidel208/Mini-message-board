const express = require("express");
const path = require("node:path");
const indexModule = require("./routes/index");
const newRouter = require("./routes/new");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexModule.router);
app.use("/new", newRouter);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
const express = require("express");
const router = express.Router();

const indexModule = require("./index");

router.get("/", (req, res) => {
    res.render("form", {title: "New Message"});
});

router.post("/", (req, res) => {
    const { text, user } = req.body;

    indexModule.messages.push({
        text,
        user,
        added: new Date()
    });

    res.redirect("/");
});



module.exports = router;
const express = require("express");
const router = express.Router();

const messages = [
    {
        text: "Hi there",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello world",
        user: "Julius",
        added: new Date()
    },
    {
        text: "New beginning",
        user: "Fidel",
        added: new Date()
    }
];

router.get("/", (req, res) => {
    res.render("index", {title: "Mini messaging board", messages: messages});
});

router.get("/message/:id", (req, res) => {
  const message = messages[req.params.id];

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("message", {
    title: "Message Details",
    message
  });
});

module.exports = {router, messages};
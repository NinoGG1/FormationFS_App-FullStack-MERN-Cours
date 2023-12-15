const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.json({ message: "Voici les données" }));

router.post("/", (req, res) => {
  res.json({ message: req.body.message });
});

router.put("/:id", (req, res) => {
  res.json({ messageId: "Modification du post " + req.params.id });
});

router.delete("/:id", (req, res) => {
  res.json({ messageId: "Suppression du post " + req.params.id });
});

router.patch("/like-post/:id", (req, res) => {
  res.json({ messageId: "Like du post " + req.params.id });
});

router.patch("/dislike-post/:id", (req, res) => {
  res.json({ messageId: "Dislike du post " + req.params.id });
});

module.exports = router;

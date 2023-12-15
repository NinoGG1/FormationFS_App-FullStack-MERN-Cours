const express = require("express");
const {
  setPosts,
  getPosts,
  deletePost,
  editPost,
} = require("../controllers/post.controller");
const router = express.Router();

router.get("/", getPosts);
router.post("/", setPosts);
router.put("/:id", editPost);
router.delete("/:id", deletePost);

router.patch("/like-post/:id", (req, res) => {
  res.json({ messageId: "Like du post " + req.params.id });
});

router.patch("/dislike-post/:id", (req, res) => {
  res.json({ messageId: "Dislike du post " + req.params.id });
});

module.exports = router;

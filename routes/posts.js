import express from "express";
import Post from "../models/Post.js";
const router = express.Router();

//To get all the posts in the database route
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ msg: err });
  }
});

//To add a new post
router.post("/", async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      description: req.body.description,
    });

    await post
      .save()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json({ msg: err });
      });
  } catch (err) {
    res.json({ msg: err });
  }
});
//To find a post by id
router.get("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const matchedPost = await Post.findById(postId);

    res.send(JSON.stringify(matchedPost));
  } catch (err) {
    res.json({ msg: err });
  }
});
//To delete a post

router.delete("/:id", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.id });
    res.json(removedPost);
  } catch (err) {
    res.json({ msg: err });
  }
});

//To update a post

router.patch("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ msg: err });
  }
});

export default router;

import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: {
      type: Date,
      default: Date.now,
    },
  },
});
const Post = mongoose.model("Posts", postSchema);

export default Post;

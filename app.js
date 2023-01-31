import {} from "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";
import postsRoute from "./routes/posts.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 8080;

//Database Connection
mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  mongoose.set("strictQuery", true),
  () => {
    console.log("DB Connected");
  }
);
//Middleware
app.use(bodyParser.json());
app.use("/posts", postsRoute);
app.use(cors);

//Home Page
app.get("/", (req, res) => {
  res.send("This is the homepage");
});

app.listen(PORT, () => {
  console.log(`Listening on port: http://localhost:${PORT}`);
});

import express from "express";
// import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;

app.listen(PORT, () => {
  // mongoose.connect("mongodb://127.0.0.1:27017/node-okten");
  console.log(`Server has started on PORT ${PORT} 🚀🚀🚀`);
});

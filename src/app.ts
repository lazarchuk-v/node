import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT} 🚀🚀🚀`);
});

console.log("hello");

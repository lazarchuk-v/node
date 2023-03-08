import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import { userRouter } from "./router/user.router";
import { IError } from "./types/common.types";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

// --- ERROR HANDLER ---
app.use((err: IError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status;

  return res.status(status).json({
    message: err.message,
    status,
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/node-okten").then();
  console.log(`Server has started on PORT ${PORT} -=*=- Running -=*=-`);
});

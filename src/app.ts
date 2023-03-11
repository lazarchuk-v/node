import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import { configs } from "./config/config";
import { userRouter } from "./router/user.router";
import { IError } from "./types/common.types";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

// --- ERROR HANDLER ---
app.use((err: IError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;

  return res.status(status).json({
    message: err.message,
    status,
  });
});

app.listen(configs.PORT, () => {
  mongoose.connect(configs.DB_URL).then();
  console.log(`Server has started on PORT ${configs.PORT} -=*=- Running -=*=-`);
});

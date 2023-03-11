import { Router } from "express";

import { userController } from "../controller/user.controller";
import { userMiddleware } from "../middleware/user.middleware";

const router = Router();

router.get("/", userController.getAll);
router.post("/", userMiddleware.isUserValidCreate, userController.create);
router.get(
  "/:userId",
  userMiddleware.isUserValid,
  userMiddleware.getByIdOrThrow,
  userController.getById
);
router.put(
  "/:userId",
  userMiddleware.getByIdOrThrow,
  userMiddleware.isUserValidUpdate,
  userMiddleware.getByIdOrThrow,
  userController.update
);
router.delete(
  "/:userId",
  userMiddleware.isUserValid,
  userMiddleware.getByIdOrThrow,
  userController.delete
);

export const userRouter = router;

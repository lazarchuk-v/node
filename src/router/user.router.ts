import { Router } from "express";

import { userController } from "../controller/user.controller";
import { userMiddleware } from "../middleware/user.middleware";

const router = Router();

router.get("/", userController.getAll);
router.get("/:userId", userMiddleware.getByIdAndThrow, userController.getById);
router.post("/", userController.create);
router.put("/:userId", userMiddleware.getByIdAndThrow, userController.update);
router.delete(
  "/:userId",
  userMiddleware.getByIdAndThrow,
  userController.delete
);

export const userRouter = router;

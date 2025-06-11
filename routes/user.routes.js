import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controllers.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", authorize, getUsers);
userRouter.get("/:id", getUser);

userRouter.post("/", (req, res) =>
  res.status(200).json({ message: "Create new user" })
);

userRouter.put("/:id", (req, res) =>
  res.status(200).json({ message: "Update user" })
);

userRouter.delete("/:id", (req, res) =>
  res.status(200).json({ message: "Delete user" })
);

export default userRouter;

import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  return res.status(200).json({ message: "Get all user" });
});

userRouter.get("/:id", (req, res) =>
  res.status(200).json({ message: "Get user" })
);

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

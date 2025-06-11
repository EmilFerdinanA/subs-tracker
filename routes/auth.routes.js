import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) =>
  res.status(200).json({ message: "sign up" })
);

authRouter.post("/sign-in", (req, res) =>
  res.status(200).json({ message: "sign in" })
);

authRouter.post("/sign-out", (req, res) =>
  res.status(200).json({ message: "sign out" })
);

export default authRouter;

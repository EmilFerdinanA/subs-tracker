import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubcriptions } from "../controllers/subscription.controllers.js";

const subcriptionRouter = Router();

subcriptionRouter.get("/", (req, res) =>
  res.status(200).json({ message: "Get all subcription" })
);

subcriptionRouter.get("/:id", (req, res) =>
  res.status(200).json({ message: "Get subcription detail" })
);

subcriptionRouter.post("/", authorize, createSubcriptions);

subcriptionRouter.put("/:id", (req, res) =>
  res.status(200).json({ message: "Update subcription" })
);

subcriptionRouter.delete("/:id", (req, res) =>
  res.status(200).json({ message: "Delete subcription" })
);

subcriptionRouter.get("/user/:id", (req, res) =>
  res.status(200).json({ message: "Get all user subcription" })
);

subcriptionRouter.put("/:id/cancel", (req, res) =>
  res.status(200).json({ message: "Cancel subcription" })
);

subcriptionRouter.get("/upcoming-renewal", (req, res) =>
  res.status(200).json({ message: "Get upcoming renewal" })
);

export default subcriptionRouter;

import express from "express";
import { PORT } from "./config/env.js";

import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subcriptionRouter from "./routes/subcription.routes.js";
import connectToDatabase from "./database/mongodb.js";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subcriptions", subcriptionRouter);

app.listen(PORT, async () => {
  console.log(`server running in port http://localhost:${PORT}`);
  await connectToDatabase();
});

export default app;

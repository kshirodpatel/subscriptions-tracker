import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routers.js";
import subscriptionRouter from "./routes/subscription.routes.js";

const app = express();

app.use(express.json());

//Static route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Auth Route
app.use("/api/v1/auth", authRouter);

//Users Route
app.use("/api/v1/users", userRouter);

//Subscriptions Route
app.use("/api/v1/subscriptions", subscriptionRouter);

app.listen(PORT, () => {
  console.log(`Subscription Tracker started on Port ${PORT}`);
});

export default app;

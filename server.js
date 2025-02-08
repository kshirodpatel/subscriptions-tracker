import express from "express";

const app = express();
import { PORT } from "./config/env.js";
console.log("PORT", PORT);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Subscription Tracker started on Port ${PORT}`);
});

export default app;

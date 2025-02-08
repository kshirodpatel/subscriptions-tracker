import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) =>
  res.send({
    message: "User Signup Route",
  })
);

authRouter.post("/sign-in", (req, res) =>
  res.send({
    message: "User Signin Route",
  })
);

authRouter.post("/sign-out", (req, res) =>
  res.send({
    message: "User Signout Route",
  })
);

export default authRouter;

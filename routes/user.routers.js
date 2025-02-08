import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) =>
  res.send({
    message: "Get all users",
  })
);

userRouter.get("/:id", (req, res) =>
  res.send({
    message: "Get all the data of a single user",
  })
);

userRouter.post("/", (req, res) =>
  res.send({
    message: "Create user route",
  })
);

userRouter.put("/:id", (req, res) =>
  res.send({
    message: "Update a user",
  })
);

userRouter.delete("/:id", (req, res) =>
  res.send({
    message: "Delete a user",
  })
);

export default userRouter;

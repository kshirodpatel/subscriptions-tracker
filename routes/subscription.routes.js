import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "GET all subscriptions" })
);

subscriptionRouter.get("/:id", (req, res) =>
  res.send({
    message: "Get all the data of a single subscription",
  })
);

subscriptionRouter.post("/", (req, res) =>
  res.send({
    message: "Create a new subscription",
  })
);

subscriptionRouter.put("/:id", (req, res) =>
  res.send({
    message: "Update a subscription",
  })
);

subscriptionRouter.delete("/:id", (req, res) =>
  res.send({
    message: "Delete a subscription",
  })
);

subscriptionRouter.get("/user/:id", (req, res) =>
  res.send({
    message: "Get all the subscription data for a user",
  })
);

subscriptionRouter.get("/:id/cancel", (req, res) =>
  res.send({
    message: "Cancel a subscription",
  })
);

subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({
    message: "Get all the upcoming renewals subscriptions",
  })
);

export default subscriptionRouter;

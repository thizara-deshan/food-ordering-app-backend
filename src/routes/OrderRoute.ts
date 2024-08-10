import express from "express";
import { jwtCheck, jwtparse } from "../middleware/auth";

const router = express.Router();

router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtparse,
  OrderController.createCheckoutSession
);

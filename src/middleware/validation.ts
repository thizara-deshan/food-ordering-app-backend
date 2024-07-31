import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const handleValidationError = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateMyuserRequest = [
  body("name").isString().notEmpty().withMessage("Name must be String"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("Address must be String"),
  body("country").isString().notEmpty().withMessage("country must be String"),
  body("city").isString().notEmpty().withMessage("city must be String"),
  handleValidationError,
];

export const validateMyRestaurantRequest = [
  body("restaurantName")
    .isString()
    .notEmpty()
    .withMessage("Restaurant name is required"),
  body("city").isString().notEmpty().withMessage("city is required"),
  body("country").isString().notEmpty().withMessage("country is required"),
  body("deliveryPrice")
    .isFloat({ min: 0 })
    .notEmpty()
    .withMessage("deliveryPrice must be Positive Number"),
  body("estimatedDeliveryTime")
    .isInt({ min: 0 })
    .notEmpty()
    .withMessage("estimatedDeliveryTime must be positive Number"),
  body("cusines").isArray().notEmpty().withMessage("cuisines must be Array"),
  body("menuitems").isArray().withMessage("menuItems must be Array"),
  body("menuitems.*.name").notEmpty().withMessage("name is required"),
  body("menuitems.*.price")
    .isFloat({ min: 0 })
    .notEmpty()
    .withMessage("price must be Positive Number"),
  handleValidationError,
];

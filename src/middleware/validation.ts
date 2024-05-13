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

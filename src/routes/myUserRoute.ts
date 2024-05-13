import express from "express";
import myUserController from "../controllers/myUserController";
import { jwtCheck, jwtparse } from "../middleware/auth";
import { validateMyuserRequest } from "../middleware/validation";

const router = express.Router();

router.post("/", jwtCheck, myUserController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtparse,
  validateMyuserRequest,
  myUserController.updateCurrentUser
);

router.get("/", jwtCheck, jwtparse, myUserController.getCurrentuser);

export default router;

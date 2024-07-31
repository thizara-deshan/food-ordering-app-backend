import express from "express";
import multer from "multer";
import myRestaurantController from "../controllers/myRestaurantController";
import { validateMyRestaurantRequest } from "../middleware/validation";
import { jwtCheck, jwtparse } from "../middleware/auth";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
});

router.get("/", jwtCheck, jwtparse, myRestaurantController.getMyRestaurants);

router.post(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtparse,
  myRestaurantController.createMyRestuarant
);

router.put(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtparse,
  myRestaurantController.updateMyRestaurant
);

export default router;

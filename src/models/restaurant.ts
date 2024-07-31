import mongoose from "mongoose";

const menuItemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const restaurantSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  restaurantName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  deliveryPrice: {
    type: Number,
    required: true,
  },
  estimatedDeliveryTime: {
    type: Number,
    required: true,
  },
  cusines: [{ type: String, required: true }],
  menuitems: [menuItemsSchema],
  imageurl: { type: String, required: true },
  lastUpdated: { type: Date, required: true },
});

const Restaurant = mongoose.model("restaurant", restaurantSchema);
export default Restaurant;

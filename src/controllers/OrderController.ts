// import Stripe from "stripe";
// import { Request, Response } from "express";
// import Restaurant from "../models/restaurant";

// const STRIPE = new Stripe(process.env.STRIPE_SECRET_KEY as string);
// const FRONTEND_URL = process.env.FRONTEND_URL as string;

// type CheckoutSessionRequest = {
//   cartItems: {
//     menuitemId: string;
//     name: string;
//     quantity: number;
//   }[];
//   deliveryDetails: {
//     email: string;
//     name: string;
//     addressLine1: string;
//     city: string;
//   };
//   restaurantId: string;
// };

// const createCheckoutSession = async (req: Request, res: Response) => {
//   try {
//     const checkoutSessionRequest = req.body as CheckoutSessionRequest;
//     const restaurant = await Restaurant.findById(
//       checkoutSessionRequest.restaurantId
//     );

//     if (!restaurant) {
//       return res.status(404).json({ message: "Restaurant Not Found" });
//     }

//     const lineItems = createLineItems(
//       checkoutSessionRequest,
//       restaurant.menuitems
//     );
//   } catch (error: any) {
//     console.log(error);
//     res.status(500).json({ message: error.raw.message });
//   }
// };

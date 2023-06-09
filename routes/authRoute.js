import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordVontroller,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
  getAllUserDetailsController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

//routing
// REGISTER || Method POST
router.post("/register", registerController);

// LOGIN || Methos POST
router.post("/login", loginController); // ab controller banate hai

//forgot password || Post
router.post("/forgot-password", forgotPasswordVontroller);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//order
router.get('/orders', requireSignIn, getOrdersController);

//all order
router.get('/all-orders', requireSignIn, isAdmin, getAllOrdersController);

//order status update
router.put('/order-status/:orderId', requireSignIn, isAdmin, orderStatusController);

//get all user details
router.get('/get-users', requireSignIn, isAdmin, getAllUserDetailsController);

export default router;

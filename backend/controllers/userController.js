import userModel from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user && user.matchPassword(password)) {
    res.json({
      _id: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } else {
    res.status(401);
    throw new Error("invalid email or password");
  }
});

import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "Auth User" });
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invallid User data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "Login User" });
});

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "logout User" });
});
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "get Profile" });
});

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "update Profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
};

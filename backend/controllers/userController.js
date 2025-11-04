import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import "dotenv/config"

export async function signUp(req, res) {
  const { name, email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  let hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({ name, email, password: hashedPassword });
  await newUser.save();

  let token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET_KEY);

  return res.status(201).json({
    message: "User created successfully",
    userData: {
      name: newUser.name,
      email: newUser.email,
      token: token,
    },
  });
}

export async function login(req, res) {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User does not exist" });
  }

  let isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  let token = jwt.sign({ email: user.email }, process.env.JWT_SECRET_KEY);

  return res.status(200).json({
    message: "User logged in successfully",
    userData: {
      name: user.name,
      email: user.email,
      token: token,
    },
  });
}

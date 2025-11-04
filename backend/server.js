import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/product.route.js";

import authMiddleware from "./middlewares/Auth.middleware.js";

dotenv.config();
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

connectDB();


app.get("/", (req, res) => {
  res.json({ message: "API is live" });
});
app.use("/api/auth",userRoutes);
app.use("/api/products",authMiddleware,productRoutes);


app.listen(PORT, () => {
  console.log('Server running ... '+PORT);
});

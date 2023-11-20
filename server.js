import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { fileURLToPath } from "url"; // Import fileURLToPath
import { dirname, join } from "path"; // Import dirname and join
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

dotenv.config();

connectDB();

const __filename = fileURLToPath(import.meta.url); // Get the current file's path
const __dirname = dirname(__filename); // Derive the directory name

const app = express();

// static file
app.use(express.static(join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "./client/build/index.html"));
});

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
  res.send({
    message: "Welcome guys",
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("server is running successfully");
});
app.use(express.static(join(__dirname, "./client/build")));

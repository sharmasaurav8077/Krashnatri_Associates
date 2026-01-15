import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { notFound } from "./middleware/notFound.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

/* -------------------- MIDDLEWARE -------------------- */

// Allowed origins
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(",").map(url => url.trim())
  : ["http://localhost:5173", "http://localhost:4173"];

// CORS setup
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow server-to-server, Postman, mobile apps
      if (!origin) return callback(null, true);

      if (
        allowedOrigins.includes(origin) ||
        allowedOrigins.some(allowed => origin.startsWith(allowed))
      ) {
        return callback(null, true);
      }

      // In production → block unknown origins
      if (process.env.NODE_ENV === "production") {
        return callback(new Error("Not allowed by CORS"));
      }

      // In development → allow
      return callback(null, true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Admin-Key"]
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* -------------------- ROOT TEST ROUTE -------------------- */
app.get("/", (req, res) => {
  res.send("🚀 MERN Backend is running successfully!");
});

/* -------------------- API ROUTES -------------------- */
app.use("/api", routes);

/* -------------------- 404 HANDLER -------------------- */
app.use(notFound);

/* -------------------- ERROR HANDLER -------------------- */
app.use(errorHandler);

/* -------------------- START SERVER -------------------- */
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || "development"}`);
});

/* -------------------- PROCESS ERROR HANDLING -------------------- */

// Server errors
server.on("error", err => {
  console.error("❌ Server error:", err);
  process.exit(1);
});

// Promise errors
process.on("unhandledRejection", err => {
  console.error("❌ Unhandled Rejection:", err);
});

// Crash errors
process.on("uncaughtException", err => {
  console.error("❌ Uncaught Exception:", err);
  process.exit(1);
});

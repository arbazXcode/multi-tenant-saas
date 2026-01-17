import express from "express";
import cors from "cors";
import { logger } from "./config/logger.js";
import healthRoutes from "./routes/health.routes.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/health", healthRoutes);
app.get("/", (req, res) => {
    res.send("hello")
})

// Global Error Handler
app.use(errorHandler);

export default app;

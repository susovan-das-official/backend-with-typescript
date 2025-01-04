import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes Import

import userRoutes from "./routes/user.routes.js";
import { error } from "console";

app.use("/api/v1/user", userRoutes);

app.use(error);
export default app;

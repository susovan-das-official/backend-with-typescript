import express, { Router } from "express";
import { testing } from "../controllers/user.controller.js";

const router = Router();

router.route("/testing").post(testing);

export default router;

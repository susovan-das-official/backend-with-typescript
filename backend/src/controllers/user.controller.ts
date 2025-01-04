import { Request, Response, NextFunction } from "express";
import { UserRequestBody } from "../types/types.js";
import { ErrorHandler } from "../utils/ErrorHandler.js";
import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const testing = asyncHandler(
  async (
    req: Request<{}, {}, UserRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { username, email, password, avatar, _id } = req.body;

    const user = await User.create({
      username,
      email,
      password,
      avatar,
      _id,
    });

    return res
      .status(201)
      .json({ success: true, message: `Welcome ${user?.username}` });
  }
);

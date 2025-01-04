import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../utils/ErrorHandler.js";
export const errorMiddleware = (
  err: ErrorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;
  return res
    .status(err.statusCode)
    .json({ success: false, message: err.message });
};

import { NextFunction, Request, Response } from "express";

export interface UserRequestBody {
  _id: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
}

export type ControllerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void | Response<any, Record<string, any>>>;

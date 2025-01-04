import { Request, Response, NextFunction } from "express";

export const testing = async (
  req: Request<{}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    // const { username, email, password, avatar, _id } = req.body;

    // const user = await User.create({
    //   username,
    //   email,
    //   password,
    //   avatar,
    //   _id,
    // });

    // res
    //   .status(201)
    //   .json({ success: true, message: `Welcome ${user?.username}` });
    res.status(200).json({ message: "Testing Controller" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

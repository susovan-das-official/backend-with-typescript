import mongoose, { Document, Schema, model } from "mongoose";
import validator from "validator";

interface UserScheme extends Document {
  _id: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  role: "admin" | "user";
  createdAt: Date;
  updatedAt: Date;
}
const userSchema: Schema = new Schema<UserScheme>(
  {
    _id: {
      type: String,
      required: [true, "ID is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      minLength: [3, "Username must be at least 3 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      validate: validator.default.isEmail,
    },
    password: {
      type: String,
      minLength: [6, "Password must be at least 6 characters long"],
    },
    avatar: {
      type: String,
      required: [true, "Avatar is required"],
      default:
        "https://res.cloudinary.com/ds1v0x5oq/image/upload/v1678906241/Avatar/DefaultAvatar.png",
    },
    role: {
      type: String,
      enum: {
        values: ["admin", "user"],
        message: "{VALUE} is not a valid role",
      },
      default: "user",
    },
  },

  { timestamps: true }
);

const User = model<UserScheme>("User", userSchema);

export default User;

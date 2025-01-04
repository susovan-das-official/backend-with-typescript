import mongoose, { connect } from "mongoose";

export const connectionDB = async () => {
  try {
    const connectionInstance = await connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(`Mongodb connection error: ${error.message}`);
    process.exit(1);
  }
};

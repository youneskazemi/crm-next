import mongoose, { mongo } from "mongoose";

async function connectDB() {
  if (mongoose.connections[0].readyState) return;

  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");
}

export default connectDB;

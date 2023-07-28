import connectDB from "../../utils/connectDB";

async function handler(req, res) {
  await connectDB();
  res.status(200).json({ message: "success" });
}

export default handler;

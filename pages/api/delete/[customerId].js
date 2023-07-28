import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: "failed", message: "error in connection to database" });
  }

  if (req.method === "DELETE") {
    try {
      const { customerId } = req.query;

      await Customer.deleteOne({ _id: customerId });

      res
        .status(200)
        .json({ status: "success", message: "customer deleted successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "failed",
        message: "error in retrieving data from database",
      });
    }
  }
}

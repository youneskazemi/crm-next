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

  if (req.method === "GET") {
    try {
      const { customerId } = req.query;
      const customer = await Customer.findOne({ _id: customerId });

      res.status(200).json({ status: "success", data: customer });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "failed",
        message: "error in retrieving data from database",
      });
    }
  }
}

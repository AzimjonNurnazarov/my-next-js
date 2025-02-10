import barChart from "@/data/barChart";

export default function handler(req, res) {
  res.status(200).json({ barChart });
}

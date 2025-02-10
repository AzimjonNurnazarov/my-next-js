import lineChart from "@/data/lineChart";

export default function handler(req, res) {
  res.status(200).json(lineChart);
}

import backstreetboys from "./../../data/backstreetboys";

export default function handler(req, res) {
  res.status(200).json(backstreetboys);
}

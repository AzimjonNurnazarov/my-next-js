import teams from "./../../data/teams";

export default function handler(req, res) {
  res.status(200).json(teams);
}

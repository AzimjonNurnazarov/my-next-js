const { BsMicrosoftTeams } = require("react-icons/bs");
const { FaPhone } = require("react-icons/fa");
const { FaFolder } = require("react-icons/fa6");
const { IoSettings } = require("react-icons/io5");
const { MdDashboard } = require("react-icons/md");
const { PiProjectorScreenFill } = require("react-icons/pi");
const { TbUsers } = require("react-icons/tb");

const Data = [
  {
    icon: <MdDashboard className="icon" />,
    text: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <BsMicrosoftTeams className="icon" />,
    text: "Teams",
    path: "/teams",
  },
  { icon: <TbUsers className="icon" />, text: "Employees", path: "/employees" },
  {
    icon: <PiProjectorScreenFill className="icon" />,
    text: "Projects",
    path: "/projects",
  },
  { icon: <FaPhone className="icon" />, text: "Meetings", path: "/meetings" },
  { icon: <FaFolder className="icon" />, text: "Tasks", path: "/tasks" },
  {
    icon: <IoSettings className="icon" />,
    text: "Settings",
    path: "/settings",
  },
];

export default Data;

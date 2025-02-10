"use client";
import React from "react";
import "./style.css";
import img1 from "../../imgs/setting.png";
import img9 from "../../imgs/Illustration.png";
import Image from "next/image";
import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { BsMicrosoftTeams } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";
import { PiProjectorScreenFill } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { Header } from "./Header";
import { usePathname } from "next/navigation";
import data from "../../data/dashboard";

const Data = data;

export const Dashboard = () => {
  const [state, setState] = useState(true);

  return (
    <div className={`${state ? "dashboard" : "hide"}`}>
      <div className="teamify">
        <Image src={img1} className="img1" />
        <p className="text">Teamify</p>
      </div>

      <div className="arrow">
        {state ? (
          <IoIosArrowForward
            className="arrowIcon"
            onClick={() => {
              setState(!state);
            }}
          />
        ) : (
          <IoIosArrowBack
            className="arrowIcon"
            onClick={() => {
              setState(!state);
            }}
          />
        )}
      </div>

      <ul>
        {Data.map((item, index) => {
          const pathname = usePathname();
          const isActive = pathname.startsWith(item.path);
          return (
            <li key={index}>
              <Link
                href={item.path}
                className="link"
                id={isActive ? "active" : ""}
              >
                {item.icon}
                <p>{item.text}</p>
              </Link>
            </li>
          );
        })}
      </ul>

      <Image src={img9} className="img9" />
    </div>
  );
};

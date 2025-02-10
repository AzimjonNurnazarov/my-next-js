"use client";
import React, { useState } from "react";
import "./style.css";
import Image from "next/image";
import img1 from "../../imgs/setting.png";
import img9 from "../../imgs/Illustration.png";
import { MdDashboard } from "react-icons/md";
import { BsMicrosoftTeams } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";
import { PiProjectorScreenFill } from "react-icons/pi";
import { FaPhone, FaFolder } from "react-icons/fa";
import { IoSettings, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import data from "../../data/dashboard";

export const Dashboard = () => {
  const [state, setState] = useState(true);
  const pathname = usePathname(); // Hook bitta joyda chaqiriladi

  return (
    <div className={`${state ? "dashboard" : "hide"}`}>
      <div className="teamify">
        <Image src={img1} className="img1" alt="Teamify logo" width={50} height={50} />
        <p className="text">Teamify</p>
      </div>

      <div className="arrow">
        {state ? (
          <IoIosArrowForward
            className="arrowIcon"
            onClick={() => setState(!state)}
          />
        ) : (
          <IoIosArrowBack
            className="arrowIcon"
            onClick={() => setState(!state)}
          />
        )}
      </div>

      <ul>
        {data.map((item, index) => {
          const isActive = pathname.startsWith(item.path);
          return (
            <li key={index}>
              <Link href={item.path} className={`link ${isActive ? "active" : ""}`}>
                {item.icon}
                <p>{item.text}</p>
              </Link>
            </li>
          );
        })}
      </ul>

      <Image src={img9} className="img9" alt="Illustration" width={300} height={200} />
    </div>
  );
};

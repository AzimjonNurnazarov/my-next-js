import React from "react";
import "./style.css";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import img from "../../imgs/right imgs/unsplash_NohB3FJSY90.png";
import Image from "next/image";
import img1 from "../../imgs/right imgs/1.png";
import img2 from "../../imgs/right imgs/2.png";
import img3 from "../../imgs/right imgs/3.png";
import img4 from "../../imgs/right imgs/4.png";
import img5 from "../../imgs/right imgs/5.png";

const data1 = [
  {
    top: "Top 10",
    middle: "Position in Dribble",
    footer: "20% Increase from Last Week",
  },

  {
    top: "26",
    middle: "New employees onboarded",
    footer: "15% Increase from Last Month",
  },

  {
    top: "500",
    middle: "New Clients Approached",
    footer: "5% Increase from Last Week",
  },
];

const imgs = [img1, img2, img3, img4, img5];

const data = [
  { top: "Ellie joined team developers", footer: "04 April, 2021 | 04:00 PM" },
  { top: "Jenny joined team HR", footer: "04 April, 2021 | 04:00 PM" },
  {
    top: "Adam got employee of the month",
    footer: "03 April, 2021 | 02:00 PM",
  },
  {
    top: "Adam got employee of the month",
    footer: "02 April, 2021 | 02:00 PM",
  },
  {
    top: "Jack joined team design",
    footer: "01 April, 2021 | 03:00 PM",
  },
];

export const RightSide = () => {
  return (
    <div className="rightSide">
      <div className="top">
        <CiSearch className="icon" />
        <CiBellOn className="icon" />
        <Image src={img} className="avatar" />
        <IoIosArrowDown id="icon" />
      </div>

      <div className="middle">
        {data1.map((item, index) => {
          return (
            <div className="box" key={index}>
              <h3>{item.top}</h3>
              <h4>{item.middle}</h4>
              <h5>{item.footer}</h5>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <div className="top">
          <h3>Notifications</h3>
          <p>View All</p>
        </div>
        {data.map((item, index) => {
          return (
            <div className="box" key={index}>
              <Image src={imgs[index]} />
              <span>
                <h4>{item.top}</h4>
                <h5>{item.footer}</h5>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

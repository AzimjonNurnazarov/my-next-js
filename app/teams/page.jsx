"use client";
import React, { useEffect, useState } from "react";
import Data from "./teams";
import "../components/style.css";
import Link from "next/link";
import { getTeamsData } from "@/axios";

// const [data, setData] = useState([]);

// useEffect(() => {
//   const res = getTeamsData().then((res) => {
//     console.log(res);
//     setData(res);
//   });
// }, []);

const Teams = () => {
  return (
    <table className="team-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Group Title</th>
          <th>Quantity</th>
          <th>Quote of Team</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {Data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.quote}</td>
              <td>
                <Link href={item.href}>
                  <button className="show">Show</button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export const getStaticProps = async () => {
  const res = await getTeamsData();
  console.log(res, "res");

  return {
    props: { data: res },
  };
};

export default Teams;

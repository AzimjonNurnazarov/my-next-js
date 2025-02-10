"use client";
import React, { useEffect, useState } from "react";
import "../components/style.css";
import Link from "next/link";
import { getTeamsData } from "@/axios";

const Teams = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTeamsData();
        setData(res);
      } catch (error) {
        console.error("Failed to fetch teams data:", error);
      }
    };

    fetchData();
  }, []);

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
        {data.length > 0 ? (
          data.map((item, index) => (
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
          ))
        ) : (
          <tr>
            <td colSpan="5">Loading...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Teams;

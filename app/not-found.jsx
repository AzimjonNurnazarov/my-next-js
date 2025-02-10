import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>404 Page</h1>
      <p>There might be any problems with your url!</p>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
};

export default NotFound;

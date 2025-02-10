"use client";
import { Header } from "@/app/components/Header";
import "./components/style.css";
import { Dashboard } from "./components/Dashboard";
import { RightSide } from "@/app/components/RightSide";

export default function Home() {
  return (
    <div>
      <Dashboard />
      <Header />
      <RightSide />
    </div>
  );
}

"use client"; // For the toggle functionality

import { useState } from "react";
import Dots from "../components/dots";
import Plaza from "../components/plaza";
import Navbar from "../components/navbar";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [activePlaza, setActivePlaza] = useState("Home");

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="flex items-center justify-center relative min-h-screen bg-white text-gray-800 dark:bg-[#18181b] dark:text-gray-200 transition-colors">
        <Dots />
        <main className="z-10 border w-[60rem] h-[40rem] p-4 flex">
          <Plaza activePlaza={activePlaza} />
          <Navbar setActivePlaza={setActivePlaza} isDark={isDark} setIsDark={setIsDark} />
        </main>
      </div>
    </div>
  );
}

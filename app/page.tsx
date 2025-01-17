"use client";

import { useState } from "react";
import Dots from "../components/dots";
import Plaza from "../components/plaza";
import Navbar from "../components/navbar";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [activePlaza, setActivePlaza] = useState("Home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePlazaChange = (newPlaza: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActivePlaza(newPlaza);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="flex items-center justify-center relative min-h-screen bg-white text-gray-800 dark:bg-[#18181b] dark:text-gray-200 transition-colors">
        <Dots />
        <main className="z-10 border w-[60rem] h-[40rem] p-4 flex">
          <div
            className={`flex-1 transition-opacity duration-500 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <Plaza activePlaza={activePlaza} />
          </div>
          <Navbar setActivePlaza={handlePlazaChange} isDark={isDark} setIsDark={setIsDark} />
        </main>
      </div>
    </div>
  );
}


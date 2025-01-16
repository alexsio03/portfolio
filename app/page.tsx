"use client"; // For the toggle functionality

import { useState } from "react";
import Dots from "../components/dots";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="relative min-h-screen bg-white text-gray-800 dark:bg-[#121212] dark:text-gray-200 transition-colors">

        <Dots />

        {/* Navbar with light/dark toggle */}
        <nav className="flex justify-end p-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-800
                       dark:bg-gray-700 dark:text-gray-100 transition-colors"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>

        {/* Main content */}
        <main className="flex flex-col items-center justify-center pt-24 pb-24">
          <h1 className="mb-4 text-4xl font-bold">Dark/Light Mode Background</h1>
          <p className="max-w-lg text-center">
            This is a demonstration of dotted clusters in the top-right and bottom-left corners with a theme toggle.
          </p>
        </main>
      </div>
    </div>
  );
}


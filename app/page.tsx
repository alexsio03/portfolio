"use client";

import Dots from "../components/dots";
import Plaza from "../components/plaza";
import Navbar from "../components/navbar";
import { Neko } from "neko-ts";
import React, { useState, useRef, useEffect } from "react";

const Home = () => {
	const [isDark, setIsDark] = useState(true);
	const [activePlaza, setActivePlaza] = useState("Home");
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const neko = useRef<Neko>(null);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);

		if (!isMobile && !neko.current) {
			neko.current = new Neko({
				origin: {
					x: 100,
					y: 100,
				},
				parent: document.getElementById("main") as HTMLElement,
			});
		}

		return () => window.removeEventListener("resize", checkMobile);
	}, [isMobile]);

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
				{isMobile ? (
					<div className="p-8 text-center">
						<h2 className="text-2xl font-bold mb-4">
							Mobile View Not Available
						</h2>
						<p className="text-lg">The site is not optimized for mobile viewing yet. Please visit on desktop and check back soon.</p>
					</div>
				) : (
					<>
						<Dots />
						<main
							id="main"
							className="z-10 w-full h-screen flex items-center justify-center"
						>
							<div className="w-[60rem] h-[40rem] p-4 flex">
								<div
									className={`flex-1 transition-opacity duration-500 ${
										isTransitioning ? "opacity-0" : "opacity-100"
									}`}
								>
									<Plaza activePlaza={activePlaza} />
								</div>
								<Navbar
									setActivePlaza={handlePlazaChange}
									isDark={isDark}
									setIsDark={setIsDark}
								/>
							</div>
						</main>
					</>
				)}
			</div>
		</div>
	);
};

export default Home;

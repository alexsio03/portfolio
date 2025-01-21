"use client";

import { useState, useEffect, useRef } from "react";
import Dots from "../components/dots";
import Plaza from "../components/plaza";
import Navbar from "../components/navbar";
import { Neko } from "neko-ts";

export default function Home() {
	const [isDark, setIsDark] = useState(true);
	const [activePlaza, setActivePlaza] = useState("Home");
	const [isTransitioning, setIsTransitioning] = useState(false);

	const neko = useRef<Neko>(null);

	useEffect(() => {
		if (!neko.current) {
			neko.current = new Neko({
				origin: {
					x: 100,
					y: 100,
				},
				parent: document.getElementById("main") as HTMLElement,
			});
		}
	}, [neko]);

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
			</div>
		</div>
	);
}

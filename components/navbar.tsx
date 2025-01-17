import { useState } from "react";
import * as Icons from "../icons/navbar";

export default function Navbar({
	setActivePlaza,
	isDark,
	setIsDark,
}: {
	setActivePlaza: (label: string) => void;
	isDark: boolean;
	setIsDark: (value: boolean) => void;
}) {
	const [activeIndex, setActiveIndex] = useState(0);

	const navItems = [
		{ icon: <Icons.HomeIcon />, label: "Home" },
		{ icon: <Icons.WorkIcon />, label: "Experience" },
		{ icon: <Icons.ProjectIcon />, label: "Projects" },
		{ icon: <Icons.EduIcon />, label: "Education" },
		{ icon: <Icons.SkillsIcon />, label: "Skills" },
		{ icon: <Icons.ResumeIcon />, label: "Resume" },
		{
			icon: isDark ? <Icons.MoonIcon /> : <Icons.SunIcon />,
			label: isDark ? "Dark Mode" : "Light Mode",
		},
	];

	return (
		<div className="flex flex-col mx-auto justify-around bg-zinc-800 p-4 rounded-2xl border border-zinc-700">
			{navItems.map((item, index) => (
				<NavPill
					key={item.label}
					icon={item.icon}
					label={item.label.toUpperCase()}
					isIconLeft={index % 2 === 0}
					isActive={index === activeIndex}
					onClick={() => {
						if (item.label.includes("Mode")) {
							setIsDark(!isDark);
						} else {
							setActiveIndex(index);
							setActivePlaza(item.label);
						}
					}}
				/>
			))}
		</div>
	);
}

function NavPill({
	label,
	icon,
	isIconLeft,
	isActive,
	onClick,
}: {
	label: string;
	icon?: React.ReactNode;
	isIconLeft: boolean;
	isActive: boolean;
	onClick: () => void;
}) {
	return (
		<div
			onClick={onClick}
			className={`py-2 px-8 flex flex-row justify-between items-center rounded-full cursor-pointer transition-colors duration-300 ${
				isActive
					? "bg-zinc-300 text-zinc-800"
					: "hover:bg-zinc-300 hover:text-zinc-800 text-white"
			}`}
		>
			{isIconLeft ? (
				<>
					<div className="mr-4">{icon}</div>
					<h1 className="font-bold tracking-wide">{label}</h1>
				</>
			) : (
				<>
					<h1 className="font-bold tracking-wide">{label}</h1>
					<div className="ml-4">{icon}</div>
				</>
			)}
		</div>
	);
}



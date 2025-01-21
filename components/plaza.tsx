import Pod from "./pod";
import Image from "next/image";
import alexPic from "../public/coco2.png";
import * as Icons from "../icons/plaza";
import { useState } from "react";

const plazas: { [key: string]: () => React.ReactNode } = {
	Home: () => <HomePlaza />,
	Education: () => <EduPlaza />,
	Resume: () => <ResumePlaza />,
	Projects: () => <ProjectPlaza />,
	Experience: () => <ExperiencePlaza />,
	Skills: () => <SkillsPlaza />,
};

export default function Plaza({ activePlaza }: { activePlaza: string }) {
	const ActivePlazaComponent =
		plazas[activePlaza] || (() => <div>Plaza not found</div>);

	return (
		<div className="basis-3/4 h-full rounded-2xl mr-4">
			<ActivePlazaComponent />
		</div>
	);
}

function HomePlaza() {
	const [copyMessage, setCopyMessage] = useState("");

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
		setCopyMessage("Copied to clipboard!");
		setTimeout(() => {
			setCopyMessage("");
		}, 1000);
	};

	return (
		<div className="grid grid-cols-10 grid-rows-10 gap-4 h-full">
			<Pod classExtra="col-span-4 row-span-8 flex !p-0 bg-zinc-900 ">
				<Image className="rounded-lg" src={alexPic} alt="Alex Pic" />
			</Pod>

			<Pod classExtra="col-span-6 row-span-4 flex justify-center">
				<div className="flex flex-col justify-center">
					<h1 className="text-4xl  mt-5 leading-tight">Hi, I&apos;m Alex.</h1>
					<p className="text-4xl  leading-tight text-zinc-400 mb-10">
						I&apos;m a Full-Stack Software Engineer.
					</p>
				</div>
			</Pod>

			<Pod classExtra="col-span-3 row-span-4">
				<div className="flex flex-col my-2">
					<h1 className="text-xl  mb-2">Links</h1>
					<hr className="my-2" />
					<a
						href="https://blog.alexwarda.com"
            target="_blank"
						className="flex flex-row hover:underline text-lg  text-zinc-400 my-2"
					>
						<span className="mr-2">
							<Icons.UnlockIcon />
						</span>
						Blog
					</a>
					<a
						href="https://photos.alexwarda.com"
            target="_blank"
						className="hover:underline flex flex-row text-lg  text-zinc-400 my-2"
					>
						<span className="mr-2">
							<Icons.LockIcon />
						</span>
						Photos
					</a>
					<a
						href="https://dash.local.alexwarda.com"
            target="_blank"
						className="hover:underline flex flex-row text-lg  text-zinc-400 my-2"
					>
						<span className="mr-2">
							<Icons.LockIcon />
						</span>
						Media Server
					</a>
				</div>
			</Pod>

			<Pod classExtra="col-span-3 row-span-4 ">
				<div className="flex flex-col my-2 h-full">
					<h1 className="text-xl  mb-2">Hobbies</h1>
					<hr className="my-2" />
					<div className="flex flex-row justify-around h-full">
						<span className="flex flex-col justify-around">
							<Icons.FishIcon />
							<Icons.BookIcon />
						</span>
						<span className="flex flex-col justify-around">
							<Icons.GuitarIcon />
							<Icons.HikeIcon />
						</span>
					</div>
				</div>
			</Pod>

			<Pod classExtra="col-span-4 row-span-1 flex justify-around items-center">
				<Icons.LocationIcon />
				<h2 className="text-lg ">San Francisco, CA</h2>
			</Pod>

			<Pod classExtra="col-span-6 row-span-2 flex ">
				<div className="flex flex-col">
					<h1 className="text-xl  mb-2">Why Me?</h1>
					<hr className="mb-2" />
					<h1 className="text-md text-zinc-400 ">
						Passionate, Determined, Professional, Curious
					</h1>
				</div>
			</Pod>
			<Pod classExtra="col-span-4 row-span-1 flex justify-around items-center">
				{copyMessage ? (
					<p>{copyMessage}</p>
				) : (
					<>
						<a href="https://github.com/alexsio03">
							<Icons.GithubIcon />
						</a>
						<a href="https://www.linkedin.com/in/alexwarda">
							<Icons.LinkedInIcon />
						</a>
						<a
							className="cursor-pointer"
							onClick={() => copyToClipboard("alexsio03@gmail.com")}
						>
							<Icons.MailIcon />
						</a>
						<a
							className="cursor-pointer"
							onClick={() => copyToClipboard("925-949-6280")}
						>
							<Icons.PhoneIcon />
						</a>
					</>
				)}
			</Pod>
		</div>
	);
}

function ResumePlaza() {
	return (
		<div className="grid grid-cols-10 grid-rows-10 gap-4 h-full">
			<Pod classExtra="col-span-10 row-span-10">
				<embed
					className="w-full h-full"
					src="/resume.pdf"
					type="application/pdf"
				/>
			</Pod>
		</div>
	);
}

function EduPlaza() {
	return (
		<div className="grid grid-cols-10 grid-rows-10 gap-4 h-full">
			<Pod classExtra="col-span-10 row-span-7 flex flex-col">
				<h1 className="text-xl">Cal Poly San Luis Obispo</h1>
				<h1 className="italic text-zinc-400">
					Bachelor&apos;s Degree in Computer Science, 3.6 GPA, Cum Laude
				</h1>
				<h1 className="text-zinc-400 italic text-xs">
					September 2021 - December 2024
				</h1>
				<hr className="my-4" />
				<div className="flex justify-around">
					<div>
						<h1 className="mb-2 text-lg">Relevant Coursework</h1>
						<ul className="list-disc ml-4 flex text-sm italic flex-col gap-1 text-zinc-400">
							<li>Database Systems</li>
							<li>Data Science</li>
							<li>Algorithms</li>
							<li>Programming Languages</li>
							<li>Computer Security</li>
							<li>Systems Programming</li>
							<li>Operating Systems</li>
							<li>Software Engineering</li>
							<li>Web Development</li>
						</ul>
					</div>
					<div>
						<h1 className="mb-2 text-lg">Extracurriculars</h1>
						<ul className="list-disc ml-4 flex text-sm italic flex-col gap-1 text-zinc-400">
							<li>SLO Hackathon</li>
							<li>Cal Poly Surfrider Foundation</li>
							<li>CP Ski Club</li>
							<li>Cal Poly Hiking Club</li>
							<li>The Pad Climbing SLO</li>
							<li>IM Soccer</li>
							<li>IM Softball</li>
						</ul>
					</div>
				</div>
			</Pod>
			<Pod classExtra="col-span-10 row-span-3 flex flex-col">
				<h1 className="text-xl">Semester Abroad: UC3M - Madrid</h1>
				<h1 className="italic text-zinc-400 text-xs">Spring Semester 2024</h1>
				<hr className="my-4" />
				<div className="flex flex-row">
					<h1 className="text-lg">Coursework:</h1>
					<h2 className="ml-8 mt-1 text-zinc-400 italic text-sm">
						Database Systems, Mobile App Development, Artificial Intelligence,{" "}
						<br />
						Software Verification and Testing
					</h2>
				</div>
			</Pod>
		</div>
	);
}

function ProjectPlaza() {
	return (
		<div className="grid grid-cols-10 grid-rows-10 gap-4 h-full">
			<Pod classExtra="flex flex-row justify-around items-center hover:cursor-pointer hover:bg-zinc-700 transition-colors duration-300 col-span-5 row-span-4">
				<h1 className="text-2xl">Home Lab</h1>
				<h1 className="text-2xl">
					<Icons.ArrowRightIcon />
				</h1>
			</Pod>
			<Pod classExtra="flex flex-row justify-around items-center hover:cursor-pointer hover:bg-zinc-700 transition-colors duration-300 col-span-5 row-span-4">
				<h1 className="text-2xl">Senior Project</h1>
				<h1 className="text-2xl">
					<Icons.ArrowRightIcon />
				</h1>
			</Pod>
			<Pod classExtra="flex flex-row justify-around items-center hover:cursor-pointer hover:bg-zinc-700 transition-colors duration-300 col-span-5 row-span-4">
				<h1 className="text-2xl">Portfolio Site</h1>
				<h1 className="text-2xl">
					<Icons.ArrowRightIcon />
				</h1>
			</Pod>
			<Pod classExtra="flex flex-row justify-around items-center hover:cursor-pointer hover:bg-zinc-700 transition-colors duration-300 col-span-5 row-span-4">
				<h1 className="text-2xl">Dead Internet Theory</h1>
				<h1 className="text-2xl">
					<Icons.ArrowRightIcon />
				</h1>
			</Pod>
			<Pod classExtra="flex flex-row justify-around items-center hover:cursor-pointer hover:bg-zinc-700 transition-colors duration-300 col-span-10 row-span-2">
				<h1 className="text-2xl">Past Projects</h1>
				<h1 className="text-2xl">
					<Icons.ArrowRightIcon />
				</h1>
			</Pod>
		</div>
	);
}

function ExperiencePlaza() {
	return (
		<div className="grid grid-cols-10 grid-rows-10 gap-4 h-full">
			<Pod classExtra="col-span-10 row-span-6">
				<h1 className="text-xl">Full Stack Software Engineer Intern</h1>
				<h2>Accolade</h2>
				<h3 className="text-zinc-400 italic text-sm">
					San Francisco, CA: June 2024 - August 2024
				</h3>
				<hr className="my-2" />
				<ul className="list-disc ml-4 mt-5 flex flex-col my-4 gap-3">
					<li>
						Full Stack Development:{" "}
						<span className="text-zinc-400 italic text-sm">
							Developed multiple improvements to the PlushCare product,
							including new API routes, database migrations, and updating pages
							throughout the site.
						</span>
					</li>
					<li>
						Project Management:{" "}
						<span className="text-zinc-400 italic text-sm">
							Led a team of 4 interns in a capstone project designing an
							internal dashboard using Salesforce and RedShift.
						</span>
					</li>
					<li>
						Feature Testing:{" "}
						<span className="text-zinc-400 italic text-sm">
							Independently conducted weekly A/B tests with the product
							management team, and implemented new connections using APIs to
							gather vital metrics.
						</span>
					</li>
					<li>
						Technologies Used:{" "}
						<span className="text-zinc-400 italic text-sm">
							Next.js, React, Jest, TypeScript, Django, Python, AWS
						</span>
					</li>
				</ul>
			</Pod>
			<Pod classExtra="col-span-10 row-span-5">
				<h1 className="text-xl">Founding Engineer</h1>
				<h2>CreatorPad</h2>
				<h3 className="text-zinc-400 italic text-sm">
					Remote: October 2023 - February 2024
				</h3>
				<hr className="my-2" />
				<ul className="list-disc ml-4 flex flex-col gap-1">
					<li>
						Web Development:{" "}
						<span className="text-zinc-400 italic text-sm">
							Worked with the CTO to redesign the main page and profile page,
							implementing cross-site connections and new database schemas.
						</span>
					</li>
					<li>
						Algorithmic Design:{" "}
						<span className="text-zinc-400 italic text-sm">
							Reduced the complexity and render time of the profile tile sizing
							algorithm by over 50% for better user experience.
						</span>
					</li>
					<li>
						Technologies Used:{" "}
						<span className="text-zinc-400 italic text-sm">
							Svelte, Drizzle, TypeScript, Linear, Figma
						</span>
					</li>
				</ul>
			</Pod>
		</div>
	);
}

function SkillsPlaza() {
	return (
		<div className="grid grid-cols-10 grid-rows-10 gap-4 h-full">
			<Pod classExtra="col-span-7 row-span-7">
				<h1 className="text-xl">Tech Stack</h1>
				<hr className="my-4" />
				<div className="grid grid-cols-3 gap-4 ml-12">
					<Icons.NextJSIcon />
					<Icons.ReactIcon />
					<Icons.SvelteIcon />
					<Icons.NodeJSIcon />
					<Icons.DockerIcon />
					<Icons.KubeIcon />
					<Icons.GitIcon />
					<Icons.LinuxIcon />
					<Icons.DBIcon />
					<Icons.AzureIcon />
					<Icons.AWSIcon />
					<Icons.GCPIcon />
				</div>
			</Pod>
			<Pod classExtra="col-span-3 row-span-7">
				<h1 className="text-lg">Coding Languages</h1>
				<hr className="my-4" />
				<div className="grid grid-cols-2 gap-10 ml-1">
					<Icons.PythonIcon />
					<Icons.GoIcon />
					<Icons.TSIcon />
					<Icons.JSIcon />
					<Icons.CIcon />
					<Icons.CPPIcon />
					<Icons.SQLIcon />
					<Icons.JavaIcon />
				</div>
			</Pod>
			<Pod classExtra="col-span-10 row-span-3">
				<h1 className="text-xl">Languages</h1>
				<hr className="my-4" />
				<div className="flex flex-row">
					<LanguageTimeline />
				</div>
			</Pod>
		</div>
	);
}

const LanguageTimeline = () => {
	return (
		<div className="flex flex-col mt-4 items-center font-sans w-full">
			<div className="relative w-full flex items-center">
				<div className="absolute top-6 w-full h-0.5 bg-zinc-600"></div>

				<div className="flex flex-col items-center">
					<div className="absolute w-4 h-4 bg-zinc-600 top-4 rounded-full"></div>
					<span className="relative -top-4 text-sm text-gray-100">English</span>
				</div>
				<div className="relative flex flex-col ml-12 items-center">
					<div className="absolute w-4 h-4 bg-zinc-600 top-4 rounded-full"></div>
					<span className="relative -top-4 text-sm text-gray-100">Polish</span>
				</div>
				<div className="relative flex flex-col ml-48 items-center">
					<div className="absolute w-4 h-4 bg-zinc-600 top-4 rounded-full"></div>
					<span className="relative -top-4 text-sm text-gray-100">German</span>
				</div>
				<div className="relative flex flex-col ml-36 items-center">
					<div className="absolute w-4 h-4 bg-zinc-600 top-4 rounded-full"></div>
					<span className="relative -top-4 text-sm text-gray-100">Spanish</span>
				</div>
			</div>

			<div className="flex justify-between w-full mt-6 italic text-sm">
				<span>Fluent</span>
				<span>Conversational</span>
				<span>Beginner</span>
			</div>
		</div>
	);
};

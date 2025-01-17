import Pod from "./pod";
import Image from "next/image";
import alexPic from "../public/coco2.png";
import * as Icons from "../icons/plaza";
import { useState } from "react";

const plazas: { [key: string]: () => JSX.Element } = {
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
					<h1 className="text-4xl font-medium mt-5 leading-tight">
						Hi, I'm Alex.
					</h1>
					<p className="text-4xl font-medium leading-tight text-zinc-400 mb-10">
						I'm a Full-Stack Software Engineer.
					</p>
				</div>
			</Pod>

			<Pod classExtra="col-span-3 row-span-4">
				<div className="flex flex-col my-2"></div>
			</Pod>

			<Pod classExtra="col-span-3 row-span-4 ">
				<div className="flex flex-col  my-2">
					<h1 className="text-xl font-medium mb-2">Hobbies</h1>
				</div>
			</Pod>

			<Pod classExtra="col-span-4 row-span-1 flex justify-around items-center">
				<Icons.LocationIcon />
				<h2 className="text-lg font-medium">San Francisco, CA</h2>
			</Pod>

			<Pod classExtra="col-span-6 row-span-2 flex ">
				<div className="flex flex-col">
					<h1 className="text-xl font-medium mb-2">Why Me?</h1>
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
				<h1>Cal Poly San Luis Obispo</h1>
				<h1>Bachelor's Degree in Computer Science, 3.6 GPA, Cum Laude</h1>
				<h1>September 2021 - December 2024</h1>
				<hr className="my-4" />
				<div className="flex justify-between">
					<div>
						<h1 className="mb-2">Relevant Coursework</h1>
						<ul>
							<li>Computer Science 1</li>
							<li>Computer Science 2</li>
							<li>Computer Science 3</li>
							<li>Computer Science 4</li>
							<li>Computer Science 5</li>
							<li>Computer Science 6</li>
						</ul>
					</div>
					<div>
						<h1 className="mb-2">Extracurriculars</h1>
						<ul>
							<li>Cal Poly Student Government</li>
							<li>Cal Poly Student Government</li>
							<li>Cal Poly Student Government</li>
							<li>Cal Poly Student Government</li>
							<li>Cal Poly Student Government</li>
							<li>Cal Poly Student Government</li>
						</ul>
					</div>
				</div>
			</Pod>
			<Pod classExtra="col-span-10 row-span-3 flex flex-col">
				<h1>Semester Abroad: UC3M - Madrid</h1>
				<h1>Spring Semester 2024</h1>
				<hr className="my-4" />
				<h1>
					Courses Taken: Database Systems, Mobile App Development, Artificial
					Intelligence, Software Verification and Testing
				</h1>
			</Pod>
		</div>
	);
}

function ProjectPlaza() {
	return (
		<div className="grid grid-cols-10 grid-rows-10 gap-4 h-full">
			<Pod classExtra="col-span-5 row-span-4">
				<h1>HomeLab</h1>
			</Pod>
			<Pod classExtra="col-span-5 row-span-4">
				<h1>Senior Project</h1>
			</Pod>
			<Pod classExtra="col-span-5 row-span-4">
				<h1>Dead Internet Theory</h1>
			</Pod>
			<Pod classExtra="col-span-5 row-span-4">
				<h1>Portfolio Site</h1>
			</Pod>
			<Pod classExtra="col-span-10 row-span-2">
				<h1>Past Projects</h1>
			</Pod>
		</div>
	);
}

function ExperiencePlaza() {
  return (
    <div className="grid grid-cols-10 grid-rows-10 gap-4 h-full">
      <Pod classExtra="col-span-10 row-span-6">
        <h1>Accolade</h1>
      </Pod>
      <Pod classExtra="col-span-10 row-span-4">
        <h1>CreatorPad</h1>
      </Pod>
    </div>
  );
}

function SkillsPlaza () {
  return (
    <div className="grid grid-cols-10 grid-rows-10 gap-4 h-full">
      <Pod classExtra="col-span-7 row-span-7">
        <h1>Tech Stack</h1>
      </Pod>
      <Pod classExtra="col-span-3 row-span-7">
        <h1>Coding Languages</h1>
      </Pod>
      <Pod classExtra="col-span-10 row-span-3">
        <h1>Languages</h1>
      </Pod>
    </div>
  );
}

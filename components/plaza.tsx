import Pod from "./pod";
import Image from "next/image";
import alexPic from "../public/coco2.png";
import * as Icons from "../icons/plaza";
import { useState } from "react";

const plazas: { [key: string]: () => JSX.Element } = {
	Home: () => <HomePlaza />,
	Education: () => <EduPlaza />,
  Resume: () => <ResumePlaza />,
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
			<Pod classExtra="col-span-4 row-span-8 flex p-0 bg-zinc-900 items-center">
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

			<Pod classExtra="col-span-3 row-span-4 flex justify-center">
				<div className="flex flex-col justify-center my-3"></div>
			</Pod>

			<Pod classExtra="col-span-3 row-span-4 flex justify-center">
				<div className="flex flex-col justify-center my-3"></div>
			</Pod>

			<Pod classExtra="col-span-4 row-span-1 flex justify-around items-center">
				<Icons.LocationIcon />
				<h2 className="text-lg font-medium">San Francisco, CA</h2>
			</Pod>

			<Pod classExtra="col-span-6 row-span-2 flex justify-around items-center">
				<div></div>
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
      <embed className="w-full h-full" src="/resume.pdf" type="application/pdf" />
  </Pod>
  </div>
  )
}

const EduPlaza = () => (
	<div>
		<h1>Welcome to the Education Plaza</h1>
		<p>This is the content of the Education Plaza.</p>
	</div>
);

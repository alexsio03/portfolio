import React, { useEffect, useMemo, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
	type Container,
	type ISourceOptions,
	MoveDirection,
	OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Dots = () => {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = useCallback(async (container?: Container): Promise<void> => {
		console.log(container);
	}, []);

	const options: ISourceOptions = useMemo(
		() => ({
			background: {
				color: "#18181b",
			},
			particles: {
				number: {
					value: 100,
				},
				move: {
					direction: MoveDirection.none,
					enable: true,
					outModes: {
						default: OutMode.out,
					},
					random: true,
					speed: 0.1,
					straight: false,
				},
				opacity: {
					animation: {
						enable: true,
						speed: 1,
						sync: false,
					},
					value: { min: 0, max: 1 },
				},
				size: {
					value: { min: 1, max: 3 },
				},
			},
		}),
		[],
	);

	return init ? (
		<Particles
			id="tsparticles"
			particlesLoaded={particlesLoaded}
			options={options}
		/>
	) : null;
};

export default React.memo(Dots);


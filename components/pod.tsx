export default function Pod({
	children,
	classExtra = "",
}: {
	children: React.ReactNode;
	classExtra?: string;
}) {
	return (
		<div
			className={`rounded-lg bg-zinc-800 border border-zinc-700 p-4 ${classExtra}`}
		>
			{children}
		</div>
	);
}

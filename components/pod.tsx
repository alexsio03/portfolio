export default function Pod({
	children,
	classExtra = "",
}: {
	children: React.ReactNode;
	classExtra?: string;
}) {
	return (
		<div
			className={`p-4 rounded-lg bg-zinc-800 border border-zinc-700 ${classExtra}`}
		>
			{children}
		</div>
	);
}

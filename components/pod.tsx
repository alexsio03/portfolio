export default function Pod({
  onClick,
	children,
	classExtra = "",
}: {
  onClick?: () => void;
	children: React.ReactNode;
	classExtra?: string;
}) {
	return (
		<div
      onClick={onClick}
			className={`rounded-lg bg-zinc-800 border border-zinc-700 p-4 ${classExtra}`}
		>
			{children}
		</div>
	);
}

import { SquareArrowOutUpRight } from "lucide-react";

export default function LiveDemoButton({
	liveDemoURL,
}: {
	liveDemoURL: string;
}) {
	return (
		<a
			href={liveDemoURL}
			target="_blank"
			className="button button--primary"
			style={{
				display: "flex",
				alignItems: "center",
				width: "fit-content",
				columnGap: "calc(0.5rem - 1px)",
			}}
		>
			Live Demo
			<SquareArrowOutUpRight />
		</a>
	);
}

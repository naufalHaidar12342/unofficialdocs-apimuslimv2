import { Code } from "lucide-react";

export default function GitHubRepoButton({
	githubRepoUrl,
}: {
	githubRepoUrl: string;
}) {
	return (
		<a
			href={githubRepoUrl}
			target="_blank"
			className="button button--outline button--secondary"
			style={{
				display: "flex",
				alignItems: "center",
				width: "fit-content",
				columnGap: "calc(0.5rem - 1px)",
				fontWeight: "bold",
			}}
		>
			Source code
			<Code />
		</a>
	);
}

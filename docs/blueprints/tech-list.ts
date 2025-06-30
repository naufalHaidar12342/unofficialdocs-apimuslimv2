import { TechnologyExamples } from "./technologies";

export function TechList(): TechnologyExamples[] {
	return [
		{
			techName: "Next.js",
			techDescription:
				"A React framework for building server-side rendered applications.",
			exampleUrl: "/docs/blueprints/using-nextjs",
		},
		{
			techName: "Coming soon",
			techDescription:
				"More technologies will be added soon to help you build your projects.",
			exampleUrl: "/docs/blueprints",
		},
	];
}

import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import { CodeXml } from "lucide-react";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<Link
					to={"/docs/getting-started"}
					className={"button button--secondary button--lg"}
					style={{
						display: "flex",
						alignItems: "center",
						width: "fit-content",
						columnGap: "calc(0.5rem - 1px)",
					}}
				>
					<CodeXml />
					Get Started
				</Link>
			</div>
		</header>
	);
}

export default function Home(): ReactNode {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`${siteConfig.title}`}
			description="Unofficial documentation by me for API Muslim v2"
		>
			<HomepageHeader />
			<main className="">
				<section className={"hero hero--secondary" + " " + styles.heroBanner}>
					<div className="container">
						<Heading as="h2">Features</Heading>
					</div>
				</section>
			</main>
		</Layout>
	);
}

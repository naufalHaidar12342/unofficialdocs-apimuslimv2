import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "API Muslim v2 (Unofficial Docs)",
	tagline:
		"Unofficial documentation to cover the gaps in the official API Muslim v2 documentation",
	favicon: "img/favicon.ico",

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	// Set the production url of your site here
	url: "https://your-docusaurus-site.example.com",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "naufalHaidar12342", // Usually your GitHub org/user name.
	projectName: "docs-apimuslimv2", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en", "id"],
		localeConfigs: {
			id: {
				htmlLang: "id-ID",
				label: "Bahasa Indonesia",
			},
		},
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ["rss", "atom"],
						xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
					// Useful options to enforce blogging best practices
					onInlineTags: "warn",
					onInlineAuthors: "warn",
					onUntruncatedBlogPosts: "warn",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		navbar: {
			title: "API Muslim v2 (Unofficial Docs)",
			logo: {
				alt: "My Site Logo",
				src: "img/logo.svg",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "documentationSidebar",
					position: "left",
					label: "Documentations",
				},
				{
					to: "/blog",
					label: "Blog",
					position: "left",
				},
				{
					to: "/docs/showcase",
					label: "Showcase",
				},
				// {
				// 	type: "docsVersionDropdown",
				// 	label: "Versions",
				// 	position: "right",
				// },
				{
					type: "localeDropdown",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Links",
					items: [
						{
							label: "Official API Muslim v2 Documentation",
							href: "https://documenter.getpostman.com/view/841292/2s9YsGittd",
						},
						{
							label: "GitHub",
							href: "https://github.com/naufalHaidar12342",
						},
					],
				},
			],
			copyright: `@ ${new Date().getFullYear()} Unofficial Docs for API Muslim v2. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
		colorMode: {
			defaultMode: "dark",
		},
	} satisfies Preset.ThemeConfig,

	themes: ["@docusaurus/theme-live-codeblock"],
};

export default config;

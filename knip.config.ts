import type { KnipConfig } from "knip";

const config: KnipConfig = {
	$schema: "https://unpkg.com/knip@5/schema.json",
	ignoreDependencies: ["tsconfig-paths", "pg"],
	ignoreMembers: ["DEVELOPMENT", "STAGING", "P2002", "P2025"],
	workspaces: {
		"apps/backend-expressjs": {
			entry: ["src/**/*.ts"],
		},
		"apps/backend-nestjs": {},
		"apps/web-astro": {},
		"apps/web-tanstack": {},
		"apps/web-vite": {},
		"packages/prisma": {
			entry: ["prisma/seeders/**/*.ts"],
			ignore: ["prisma/generated/**"],
		},
		"packages/shared": {},
	},
};

export default config;

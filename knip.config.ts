import type { KnipConfig } from "knip";

const config: KnipConfig = {
	$schema: "https://unpkg.com/knip@5/schema.json",
	ignoreDependencies: ["tsconfig-paths", "pg"],
	ignoreMembers: ["DEVELOPMENT", "STAGING", "P2002", "P2025"],
	prisma: {
		config: [],
	},
	workspaces: {
		".": {
			entry: ["prisma/seeders/seeder.ts"],
			project: ["src/**/*.ts", "prisma/seeders/**/*.ts"],
		},
	},
};

export default config;

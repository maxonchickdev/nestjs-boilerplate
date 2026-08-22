import { existsSync } from "node:fs";
import { join } from "node:path";
import { loadEnvFile } from "node:process";
import { defineConfig } from "prisma/config";

const rootEnvPath = join(__dirname, "..", "..", ".env");

if (existsSync(rootEnvPath)) {
	loadEnvFile(rootEnvPath);
}

export default defineConfig({
	datasource: {
		url: process.env.POSTGRES_URL ?? "postgresql://postgres:postgres@localhost:5432/postgres",
	},
	migrations: {
		path: join(__dirname, "prisma", "migrations"),
		seed: "npx tsx prisma/seeders/seeder.ts",
	},
	schema: join(__dirname, "prisma", "schema.prisma"),
});

import { existsSync } from "node:fs";
import { join } from "node:path";
import { loadEnvFile } from "node:process";
import { defineConfig } from "prisma/config";

const envPath = join(__dirname, "..", "..", ".env");

if (existsSync(envPath)) {
	loadEnvFile(envPath);
}

export default defineConfig({
	datasource: {
		url: process.env.POSTGRES_URL ?? "postgresql://localhost:5432/postgres",
	},
	migrations: {
		path: join(__dirname, "prisma", "migrations"),
		seed: "tsx prisma/seeders/seeder.ts",
	},
	schema: join(__dirname, "prisma", "schema.prisma"),
});

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../prisma/generated/client.js";

export function createPrismaAdapter(connectionString: string): PrismaPg {
	if (!connectionString) {
		throw new Error("Missing PostgreSQL connection string");
	}

	return new PrismaPg({
		connectionString,
	});
}

export function createPrismaClient(connectionString: string): PrismaClient {
	return new PrismaClient({
		adapter: createPrismaAdapter(connectionString),
	});
}

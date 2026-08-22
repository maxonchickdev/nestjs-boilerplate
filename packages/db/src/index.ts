import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/client.js";

export { Prisma, PrismaClient } from "./generated/client.js";
export type { Post, User } from "./generated/client.js";

export const createPrismaClientOptions = (connectionString: string) => ({
	adapter: new PrismaPg({
		connectionString,
	}),
});

export const createPrismaClient = (connectionString: string): PrismaClient => {
	return new PrismaClient(createPrismaClientOptions(connectionString));
};

export type DbClient = ReturnType<typeof createPrismaClient>;

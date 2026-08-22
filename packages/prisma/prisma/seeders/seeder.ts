import { faker } from "@faker-js/faker";
import { createPrismaClient } from "../../src/create-client.js";

const NUMBER_OF_USERS = 5;

const postgresUrl = process.env.POSTGRES_URL;

if (!postgresUrl) {
	throw new Error("Missing required environment variable POSTGRES_URL");
}

const prisma = createPrismaClient(postgresUrl);

const main = async () => {
	for (let i = 0; i < NUMBER_OF_USERS; i++) {
		await prisma.user.create({
			data: {
				email: faker.internet.email(),
				firstName: faker.person.firstName(),
				lastName: faker.person.lastName(),
				password: faker.internet.password(),
				username: faker.internet.username(),
			},
		});
	}
};

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});

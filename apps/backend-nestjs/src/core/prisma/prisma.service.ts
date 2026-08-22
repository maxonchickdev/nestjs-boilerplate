import { Inject, Injectable, type OnModuleDestroy, type OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { createPrismaClientOptions, PrismaClient } from "@web-monorepo/db";
import { ConfigKeysConst } from "../../common/constants/config-keys.const.js";
import { PrismaType } from "../../common/types/prisma.type.js";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
	constructor(@Inject(ConfigService) readonly configService: ConfigService) {
		const dbConfig = configService.getOrThrow<PrismaType>(ConfigKeysConst.PRISMA);

		super(createPrismaClientOptions(dbConfig.postgresUrl));
	}
	async onModuleInit(): Promise<void> {
		await this.$connect();
	}

	async onModuleDestroy(): Promise<void> {
		await this.$disconnect();
	}
}

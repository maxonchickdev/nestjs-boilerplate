import { registerAs } from "@nestjs/config";
import { ConfigKeyEnum } from "../enums/config.enum.js";
import type { S3Type } from "../types/s3.type.js";

export const s3Register = registerAs(ConfigKeyEnum.S3, (): S3Type => {
	return {
		region: process.env.AWS_REGION ?? "",
		bucket: process.env.AWS_S3_BUCKET ?? "",
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	};
});

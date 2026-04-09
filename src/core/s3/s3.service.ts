import { S3Client } from "@aws-sdk/client-s3";
import { Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ConfigKeyEnum } from "../../common/enums/config.enum.js";

@Injectable()
export class S3Service {
	private readonly client: S3Client;
	private readonly bucket: string;

	constructor(@Inject(ConfigService) private readonly configService: ConfigService) {
		const region = this.configService.get<string>(`${ConfigKeyEnum.S3}.region`)?.trim();
		const bucket = this.configService.get<string>(`${ConfigKeyEnum.S3}.bucket`)?.trim();

		if (!region || !bucket) {
			throw new Error(
				"S3Module requires AWS_REGION and AWS_S3_BUCKET. Remove S3Module from CoreModule imports if you are not using S3.",
			);
		}
		const accessKeyId = this.configService.get<string>(`${ConfigKeyEnum.S3}.accessKeyId`);
		const secretAccessKey = this.configService.get<string>(`${ConfigKeyEnum.S3}.secretAccessKey`);

		this.bucket = bucket;
		this.client = new S3Client({
			region,
			...(accessKeyId && secretAccessKey
				? { credentials: { accessKeyId, secretAccessKey } }
				: {}),
		});
	}

	getClient(): S3Client {
		return this.client;
	}

	getBucket(): string {
		return this.bucket;
	}
}

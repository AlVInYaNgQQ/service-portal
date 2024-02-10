import { NestFactory } from '@nestjs/core';
import { ManagementApiModule } from './management-api.module';

async function bootstrap() {
  const app = await NestFactory.create(ManagementApiModule);
  await app.listen(3000);
}
bootstrap();

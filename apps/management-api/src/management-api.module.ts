import { Module } from '@nestjs/common';
import { ManagementApiController } from './management-api.controller';
import { ManagementApiService } from './management-api.service';

@Module({
  imports: [],
  controllers: [ManagementApiController],
  providers: [ManagementApiService],
})
export class ManagementApiModule {}

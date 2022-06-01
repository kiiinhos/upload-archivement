import { Module } from '@nestjs/common';
import { UploadController } from './upload/upload.controller';
import { UploadService } from './upload/upload.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [],
  controllers: [UploadController],
  providers: [UploadService],
})
export class AppModule {}

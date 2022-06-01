import { Controller, Get, Post, UseInterceptors,UploadedFile, HttpException, HttpStatus  } from '@nestjs/common';
import { UploadService } from '../upload/upload.service';
import { FileInterceptor, MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';


const nomeFile: any = () => 'test' + Date.now()
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post()
  @UseInterceptors(FileInterceptor('file',{
      storage: diskStorage({
          destination: './files',
          filename: (req, file, callback) => {
            const filename = file.originalname.replace('.','')
            if (!file.originalname.match(/\.(mp4|MPEG-4)$/)) {
              throw new HttpException('Precisa ser um video', HttpStatus.BAD_REQUEST)
            }
            callback(null,filename + '-' + Date.now());
          }
      }),
      limits:{
        fileSize:1073741824
      }
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return{file: file.originalname}
  }
}
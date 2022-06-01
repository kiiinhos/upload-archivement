import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
  getHello(): string {
    return 'Hello World!';
  }

  uploadFile(): Array<string>{
      return ['Batata'];
  }
}



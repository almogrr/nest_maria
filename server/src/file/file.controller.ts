import { Controller, Post, UploadedFile, UseInterceptors, Param, Get, Body, Put, Delete } from '@nestjs/common';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileEntity } from './file.entity';  // <-- Add this import

@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('upload/:userId')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Param('userId') userId: number) {
    return this.fileService.uploadFile(file, userId);
  }

  @Get()
  getFiles() {
    return this.fileService.getFiles();
  }

  @Get(':id')
  getFileById(@Param('id') id: number) {
    return this.fileService.getFileById(id);
  }

  @Put(':id')
  updateFile(@Param('id') id: number, @Body() updateData: Partial<FileEntity>) {
    return this.fileService.updateFile(id, updateData);
  }

  @Delete(':id')
  deleteFile(@Param('id') id: number) {
    return this.fileService.deleteFile(id);
  }
}

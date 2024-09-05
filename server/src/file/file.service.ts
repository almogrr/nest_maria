import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';
import { FileEntity } from './file.entity';
import { QueueService } from '../queue/queue.service';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>,
    private readonly queueService: QueueService,
  ) {}

  async uploadFile(file, userId: number) {
    const uploadPath = path.join(__dirname, '../ExcelUploads', `${userId}`);
    const filePath = path.join(uploadPath, file.originalname);

    const newFile = this.fileRepository.create({
      f_name: file.originalname,
      f_path: filePath,
      user: { u_id: userId },
    });
    await this.fileRepository.save(newFile);

    fs.mkdirSync(uploadPath, { recursive: true });
    fs.writeFileSync(filePath, file.buffer);

    await this.queueService.addToQueue(file, userId);

    return newFile;
  }

  async getFiles(): Promise<FileEntity[]> {
    return this.fileRepository.find({ relations: ['user', 'customers'] });
  }

  async getFileById(fileId: number): Promise<FileEntity> {
    const file = await this.fileRepository.findOne({ where: { f_id: fileId }, relations: ['user', 'customers'] });
    if (!file) throw new NotFoundException(`File with ID ${fileId} not found`);
    return file;
  }

  async updateFile(fileId: number, updateData: Partial<FileEntity>): Promise<FileEntity> {
    await this.fileRepository.update(fileId, updateData);
    return this.getFileById(fileId);
  }

  async deleteFile(fileId: number): Promise<void> {
    const result = await this.fileRepository.delete(fileId);
    if (result.affected === 0) {
      throw new NotFoundException(`File with ID ${fileId} not found`);
    }
  }
}

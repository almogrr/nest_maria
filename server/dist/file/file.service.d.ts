import { Repository } from 'typeorm';
import { FileEntity } from './file.entity';
import { QueueService } from '../queue/queue.service';
export declare class FileService {
    private readonly fileRepository;
    private readonly queueService;
    constructor(fileRepository: Repository<FileEntity>, queueService: QueueService);
    uploadFile(file: any, userId: number): Promise<FileEntity>;
    getFiles(): Promise<FileEntity[]>;
    getFileById(fileId: number): Promise<FileEntity>;
    updateFile(fileId: number, updateData: Partial<FileEntity>): Promise<FileEntity>;
    deleteFile(fileId: number): Promise<void>;
}

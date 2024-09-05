import { FileService } from './file.service';
import { FileEntity } from './file.entity';
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    uploadFile(file: Express.Multer.File, userId: number): Promise<FileEntity>;
    getFiles(): Promise<FileEntity[]>;
    getFileById(id: number): Promise<FileEntity>;
    updateFile(id: number, updateData: Partial<FileEntity>): Promise<FileEntity>;
    deleteFile(id: number): Promise<void>;
}

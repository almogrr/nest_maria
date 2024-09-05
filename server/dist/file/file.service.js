"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const fs = require("fs");
const path = require("path");
const file_entity_1 = require("./file.entity");
const queue_service_1 = require("../queue/queue.service");
let FileService = class FileService {
    constructor(fileRepository, queueService) {
        this.fileRepository = fileRepository;
        this.queueService = queueService;
    }
    async uploadFile(file, userId) {
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
    async getFiles() {
        return this.fileRepository.find({ relations: ['user', 'customers'] });
    }
    async getFileById(fileId) {
        const file = await this.fileRepository.findOne({ where: { f_id: fileId }, relations: ['user', 'customers'] });
        if (!file)
            throw new common_1.NotFoundException(`File with ID ${fileId} not found`);
        return file;
    }
    async updateFile(fileId, updateData) {
        await this.fileRepository.update(fileId, updateData);
        return this.getFileById(fileId);
    }
    async deleteFile(fileId) {
        const result = await this.fileRepository.delete(fileId);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`File with ID ${fileId} not found`);
        }
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(file_entity_1.FileEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        queue_service_1.QueueService])
], FileService);
//# sourceMappingURL=file.service.js.map
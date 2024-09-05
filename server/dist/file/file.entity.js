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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const customer_entity_1 = require("../customer/customer.entity");
let FileEntity = class FileEntity {
};
exports.FileEntity = FileEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FileEntity.prototype, "f_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FileEntity.prototype, "f_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FileEntity.prototype, "f_path", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, user => user.files, { onDelete: 'CASCADE' }),
    __metadata("design:type", user_entity_1.UserEntity)
], FileEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => customer_entity_1.CustomerEntity, customer => customer.file),
    __metadata("design:type", Array)
], FileEntity.prototype, "customers", void 0);
exports.FileEntity = FileEntity = __decorate([
    (0, typeorm_1.Entity)('files')
], FileEntity);
//# sourceMappingURL=file.entity.js.map
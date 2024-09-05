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
exports.CustomerEntity = void 0;
const typeorm_1 = require("typeorm");
const file_entity_1 = require("../file/file.entity");
let CustomerEntity = class CustomerEntity {
};
exports.CustomerEntity = CustomerEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CustomerEntity.prototype, "c_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CustomerEntity.prototype, "c_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CustomerEntity.prototype, "c_email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CustomerEntity.prototype, "c_israeli_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CustomerEntity.prototype, "c_phone", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => file_entity_1.FileEntity, file => file.customers, { onDelete: 'CASCADE' }),
    __metadata("design:type", file_entity_1.FileEntity)
], CustomerEntity.prototype, "file", void 0);
exports.CustomerEntity = CustomerEntity = __decorate([
    (0, typeorm_1.Entity)('customers')
], CustomerEntity);
//# sourceMappingURL=customer.entity.js.map
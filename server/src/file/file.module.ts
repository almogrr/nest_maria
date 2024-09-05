import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bull';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { FileEntity } from './file.entity';
import { CustomerEntity } from '../customer/customer.entity';
import { QueueService } from '../queue/queue.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([FileEntity, CustomerEntity]),
    BullModule.registerQueue({
      name: 'fileQueue',
    }),
  ],
  providers: [FileService, QueueService],
  controllers: [FileController],
})
export class FileModule {}

import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('fileQueue') private readonly fileQueue: Queue) {}

  async addToQueue(file, userId: number) {
    await this.fileQueue.add({
      file,
      userId,
    });
  }

  async processQueue(job) {
    // Logic to process the file
    console.log('Processing file job', job.data);
  }
}

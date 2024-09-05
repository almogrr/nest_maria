import { Queue } from 'bull';
export declare class QueueService {
    private readonly fileQueue;
    constructor(fileQueue: Queue);
    addToQueue(file: any, userId: number): Promise<void>;
    processQueue(job: any): Promise<void>;
}

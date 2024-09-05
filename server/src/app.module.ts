import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bull';
import { FileModule } from './file/file.module';
import { UserModule } from './user/user.module';
import { CustomerEntity } from './customer/customer.entity';
import { FileEntity } from './file/file.entity';
import { UserEntity } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost', // Update if your host is different
      port: 3306, // Default MariaDB port
      username: 'root', // Your MariaDB username
      password: '', // Your MariaDB password
      database: 'excel_upload_tasks',
      entities: [CustomerEntity, FileEntity, UserEntity],
      synchronize: true, // Set to false in production
    }),
    BullModule.forRoot({
      redis: {
        host: 'localhost', // Update if your Redis host is different
        port: 6379, // Default Redis port
      },
    }),
    FileModule,
    UserModule,
  ],
})
export class AppModule {}

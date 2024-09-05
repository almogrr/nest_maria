import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { FileEntity } from '../file/file.entity';

@Entity('customers')
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  c_id: number;

  @Column()
  c_name: string;

  @Column()
  c_email: string;

  @Column()
  c_israeli_id: string;

  @Column()
  c_phone: string;

  @ManyToOne(() => FileEntity, file => file.customers, { onDelete: 'CASCADE' })
  file: FileEntity;
}

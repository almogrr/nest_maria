import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';  // <-- Add necessary imports
import { UserEntity } from '../user/user.entity';
import { CustomerEntity } from '../customer/customer.entity';

@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn()
  f_id: number;

  @Column()
  f_name: string;

  @Column()
  f_path: string;

  @ManyToOne(() => UserEntity, user => user.files, { onDelete: 'CASCADE' })
  user: UserEntity;

  @OneToMany(() => CustomerEntity, customer => customer.file)
  customers: CustomerEntity[];
}

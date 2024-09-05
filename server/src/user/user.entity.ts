import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { FileEntity } from '../file/file.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  u_id: number;

  @Column()
  u_name: string;

  @OneToMany(() => FileEntity, file => file.user)
  files: FileEntity[];
}

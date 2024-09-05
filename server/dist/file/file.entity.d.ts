import { UserEntity } from '../user/user.entity';
import { CustomerEntity } from '../customer/customer.entity';
export declare class FileEntity {
    f_id: number;
    f_name: string;
    f_path: string;
    user: UserEntity;
    customers: CustomerEntity[];
}

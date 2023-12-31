import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
} from 'typeorm';

@Entity()
export class WorkoutsType extends BaseEntity {
	@PrimaryGeneratedColumn()
		id : number;

	@Column()
		name : string;
}

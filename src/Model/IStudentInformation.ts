import { ICourseInfo } from './ICourseInfomation';
import { IAddress } from './IAddress';
import { IStudentClass } from './IStudentClass';
import { IFaculty } from './IFaculty';

export interface IStudentInfo {
	id: string;
	code: string;
	name: string;
	gender: string;
	birthday: Date;
	email: string;
	phone: string;
	avatar: string;
	faculty: IFaculty;
	studentClass: IStudentClass;
	address: IAddress;
	courseInfo: ICourseInfo;
}

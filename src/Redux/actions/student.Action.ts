import { typeCaseStudent } from '../typeCase';

export const addStudent = newStudent => {
	return { type: typeCaseStudent.ADD_STUDENT, payload: newStudent };
};

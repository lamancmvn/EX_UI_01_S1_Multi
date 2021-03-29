import { IStudentClass } from './../../Model/IStudentClass';
import { IAction } from '../actions/IAction';
import { typeCaseStudent } from '../typeCase';
interface IState {
	listStudent: Array<IStudentClass>;
}
const initialSate: IState = {
	listStudent: []
};

const studentReducer = (state = initialSate, action: IAction) => {
	switch (action.type) {
		case typeCaseStudent.ADD_STUDENT: {
			const newStudent = [...state.listStudent];
			const student: IStudentClass = action.payload;
			newStudent.push(student);
			return {
				...state,
				listStudent: newStudent
			};
		}
		default:
			return state;
	}
};

export default studentReducer;

import { typeCaseStudent } from "../typeCase"

export const addStudent = (newStudent: any) => {
  return { type: typeCaseStudent.ADD_STUDENT, payload: newStudent }
}
export const deleteStudent = (student: any) => {
  return { type: typeCaseStudent.DELETE_STUDENT, payload: student }
}

import { IStudentInfo } from "./../../Model/IStudentInformation"
import { IAction } from "../actions/IAction"
import { typeCaseStudent } from "../typeCase"
interface IState {
  listStudent: Array<IStudentInfo>
}
const initialSate: IState = {
  listStudent: [
    {
      id: "1",
      name: "Lam Hoang An",
      code: "18110073ST2",
      gender: "Male",
      birthday: "30/12/1999",
      email: "lamhan3012@gmail.com",
      phone: "0947699623",

      currentAddress: "64/25 Le Quang Dinh, F14, BTH tp.HCM",
      homeTown: "Khom2, TT Cai Nuoc - CM"
    },
    {
      id: "2",
      name: "Lam Hoang An",
      code: "18110073ST2",
      gender: "Male",
      birthday: "30/12/1999",
      email: "lamhan3012@gmail.com",
      phone: "0947699623",

      currentAddress: "64/25 Le Quang Dinh, F14, BTH tp.HCM",
      homeTown: "Khom2, TT Cai Nuoc - CM"
    },
    {
      id: "3",
      name: "Lam Hoang An",
      code: "18110073ST2",
      gender: "Male",
      birthday: "30/12/1999",
      email: "lamhan3012@gmail.com",
      phone: "0947699623",

      currentAddress: "64/25 Le Quang Dinh, F14, BTH tp.HCM",
      homeTown: "Khom2, TT Cai Nuoc - CM"
    },
    {
      id: "4",
      name: "Lam Hoang An",
      code: "18110073ST2",
      gender: "Male",
      birthday: "30/12/1999",
      email: "lamhan3012@gmail.com",
      phone: "0947699623",

      currentAddress: "64/25 Le Quang Dinh, F14, BTH tp.HCM",
      homeTown: "Khom2, TT Cai Nuoc - CM"
    },
    {
      id: "5",
      name: "Lam Hoang An",
      code: "18110073ST2",
      gender: "Male",
      birthday: "30/12/1999",
      email: "lamhan3012@gmail.com",
      phone: "0947699623",

      currentAddress: "64/25 Le Quang Dinh, F14, BTH tp.HCM",
      homeTown: "Khom2, TT Cai Nuoc - CM"
    },
    {
      id: "6",
      name: "Lam Hoang An",
      code: "18110073ST2",
      gender: "Male",
      birthday: "30/12/1999",
      email: "lamhan3012@gmail.com",
      phone: "0947699623",

      currentAddress: "64/25 Le Quang Dinh, F14, BTH tp.HCM",
      homeTown: "Khom2, TT Cai Nuoc - CM"
    },
    {
      id: "7",
      name: "Lam Hoang An",
      code: "18110073ST2",
      gender: "Male",
      birthday: "30/12/1999",
      email: "lamhan3012@gmail.com",
      phone: "0947699623",

      currentAddress: "64/25 Le Quang Dinh, F14, BTH tp.HCM",
      homeTown: "Khom2, TT Cai Nuoc - CM"
    },
    {
      id: "8",
      name: "Lam Hoang An",
      code: "18110073ST2",
      gender: "Male",
      birthday: "30/12/1999",
      email: "lamhan3012@gmail.com",
      phone: "0947699623",

      currentAddress: "64/25 Le Quang Dinh, F14, BTH tp.HCM",
      homeTown: "Khom2, TT Cai Nuoc - CM"
    },
    {
      id: "9",
      name: "Lam Hoang An",
      code: "18110073ST2",
      gender: "Male",
      birthday: "30/12/1999",
      email: "lamhan3012@gmail.com",
      phone: "0947699623",

      currentAddress: "64/25 Le Quang Dinh, F14, BTH tp.HCM",
      homeTown: "Khom2, TT Cai Nuoc - CM"
    },
    {
      id: "10",
      name: "Lam Hoang An",
      code: "18110073ST2",
      gender: "Male",
      birthday: "30/12/1999",
      email: "lamhan3012@gmail.com",
      phone: "0947699623",

      currentAddress: "64/25 Le Quang Dinh, F14, BTH tp.HCM",
      homeTown: "Khom2, TT Cai Nuoc - CM"
    },
    {
      id: "11",
      name: "Lam Hoang An",
      code: "18110073ST2",
      gender: "Male",
      birthday: "30/12/1999",
      email: "lamhan3012@gmail.com",
      phone: "0947699623",

      currentAddress: "64/25 Le Quang Dinh, F14, BTH tp.HCM",
      homeTown: "Khom2, TT Cai Nuoc - CM"
    }
  ]
}

const studentReducer = (state = initialSate, action: IAction) => {
  switch (action.type) {
    case typeCaseStudent.ADD_STUDENT: {
      const newStudent = [...state.listStudent]
      const student: IStudentInfo = action.payload
      newStudent.push(student)
      return {
        ...state,
        listStudent: newStudent
      }
    }
    case typeCaseStudent.DELETE_STUDENT: {
      const newStudent = [...state.listStudent]
      const student: any = action.payload

      // newStudent.push(student)
      const newS = newStudent.filter((e: any, _: number) => {
        return e.id !== student.id
      })
      console.log(`LHA:  ===> file: student.ts ===> line 202 ===> newS`, newS)
      return {
        ...state,
        listStudent: newS
      }
    }
    default:
      return state
  }
}

export default studentReducer

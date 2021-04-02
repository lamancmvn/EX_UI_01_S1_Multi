import { useSelector, useDispatch } from "react-redux"
import { Table, Popconfirm } from "antd"
import { deleteStudent } from "../../../../Redux/actions/student.Action"
const { Column } = Table
const TableStudent = () => {
  const studentList: any = useSelector(
    (state: any) => state.studentReducer.listStudent
  )
  const colTableStudent: any = useSelector(
    (s: any) => s.studentReducer.colStudent
  )

  const dispatch = useDispatch()
  const ColTable: any = [
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Gender",
      dataIndex: "gender"
    },
    {
      title: "Birthday",
      dataIndex: "birthday"
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Phone",
      dataIndex: "phone"
    },

    {
      title: "Address",
      children: [
        {
          title: "currentAddress",
          dataIndex: "currentAddress",
          key: "currentAddress"
        },
        {
          title: "homeTown",
          dataIndex: "homeTown",
          key: "homeTown"
        }
      ]
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_: any, record: any) =>
        studentList.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null
    }
  ]
  const handleDelete = (student: any) => {
    // console.log(key)
    dispatch(deleteStudent(student))
  }
  return (
    <div className="wrap_Content_Admin container">
      <h3>List Student</h3>
      <Table
        // style={{ height: "360px" }}
        pagination={{
          pageSize: 8,
          position: ["bottomRight"]
        }}
        scroll={{ y: 340 }}
        columns={ColTable}
        dataSource={studentList}
        size="middle"
      />
    </div>
  )
}

export default TableStudent

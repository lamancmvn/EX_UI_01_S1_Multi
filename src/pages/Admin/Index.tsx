/* eslint-disable no-template-curly-in-string */
import "./AdminPage.Style.css"
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  DatePicker,
  Select,
  notification
} from "antd"
import { useDispatch } from "react-redux"
import TableStudent from "./Components/TableStudent"
import { addStudent } from "../../Redux/actions/student.Action"
const arrFieldName = [
  {
    label: "name",
    placeholder: "Nhập tên",
    type: "input"
  },
  {
    label: "gender",
    type: "select"
  },
  {
    label: "birthday",
    type: "datetime"
  },
  {
    label: "email",
    placeholder: "Nhập email của bạn",
    type: "input"
  },
  {
    label: "phone",
    placeholder: "Nhập số điện thoại",
    type: "input"
  },
  {
    label: "currentAddress",
    placeholder: "Nhập Địa chỉ hiện tại",
    type: "input"
  },
  {
    label: "homeTown",
    placeholder: "Nhập địa chỉ thường trú",
    type: "input"
  }
]

const dateFormat = "YYYY/MM/DD"

interface IFieldFrom {
  name: string
  gender: string
  birthday: string
  email: string
  phone: string
  currentAddress: string
  homeTown: string
}
const { Option } = Select

const openNotification = () => {
  const args = {
    message: "Notification Title",
    description:
      "I will never close automatically. This is a purposely very very long description that has many many characters and words.",
    duration: 2
  }
  notification.open(args)
}
const renderControl = (Element: any) => {
  if (Element.type === "input")
    return <Input placeholder={Element.placeholder} />
  else if (Element.type === "select")
    return (
      <Select
        placeholder="Select a person"
        optionFilterProp="children"
        filterOption={(input, option: any) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="feMale">Nữ</Option>
        <Option value="Male">Nam</Option>
        <Option value="GT#">Khác</Option>
      </Select>
    )
  return (
    <DatePicker
      format={dateFormat}
      style={{ width: "100%", textAlign: "center" }}
    />
  )
}
const AdminPage = () => {
  const dispatch = useDispatch()

  const [form] = Form.useForm()

  const getFields = () => {
    const arr: Array<any> = []
    arrFieldName.forEach((v, i) => {
      arr.push(
        <Col span={24} key={i}>
          <Form.Item
            name={`${v.label}`}
            label={`${v.label}`}
            labelCol={{ span: 5 }}
            labelAlign="left"
            // rules={[
            //   {
            //     // required: true,
            //     message: "Input something!"
            //   }
            // ]}
          >
            {renderControl(v)}
          </Form.Item>
        </Col>
      )
    })
    return arr
  }

  const onFinish = (values: IFieldFrom) => {
    console.log(values)
    openNotification()
    dispatch(addStudent(values))
  }
  return (
    <div className="AdminPage">
      <TableStudent />
      <div className="wrap_Control container">
        <h3>From Add Student</h3>
        <Form
          form={form}
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={onFinish}
        >
          <Row gutter={[16, 16]}>{getFields()}</Row>

          <Form.Item className="btn">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default AdminPage

import { Link } from "react-router-dom"
import { Layout, Menu, Row, Col, Badge } from "antd"
import { PieChartOutlined } from "@ant-design/icons"
const { Sider } = Layout
const SiderCommon = () => {
  return (
    <Sider style={{ background: "#FFFFFF" }}>
      <div className="wrap_Logo">
        <div className="txt_Logo">
          <h3>o0oKenZyo0o</h3>
        </div>
      </div>
      <Menu
        className="Menu_Items"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ marginTop: "20px" }}
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/Admin/page1">Facuty</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<PieChartOutlined />}>
          Student
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default SiderCommon

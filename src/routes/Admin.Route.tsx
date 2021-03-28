import { PATH } from "../constants/paths"
import { Switch, Route } from "react-router-dom"
import AdminPage from "../pages/Admin/Index"
import { Layout, Menu, Row, Col, Badge } from "antd"
import "./Admin.Style.css"
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined
} from "@ant-design/icons"
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout
const AdminRoute = () => {
  return (
    <Switch>
      <Route
        exact
        path={PATH.ADMIN}
        component={() => (
          <Layout style={{ height: "100vh" }} className="adminLayout">
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
                style={{ height: "100%", marginTop: "20px" }}
              >
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  Option 1
                </Menu.Item>
                <Menu.Item key="2" icon={<PieChartOutlined />}>
                  Option 1
                </Menu.Item>
                <Menu.Item key="3" icon={<PieChartOutlined />}>
                  Option 1
                </Menu.Item>
                <Menu.Item key="4" icon={<PieChartOutlined />}>
                  Option 1
                </Menu.Item>

                <Menu.Item key="5" icon={<PieChartOutlined />}>
                  Option 1
                </Menu.Item>

                <Menu.Item key="6" icon={<PieChartOutlined />}>
                  Option 1
                </Menu.Item>

                <Menu.Item key="7" icon={<PieChartOutlined />}>
                  Option 1
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header className="HeaderCommon">
                <Row>
                  <Col span={18}>
                    <h2>Search ..........</h2>
                  </Col>
                  <Col span={6}>
                    <Row align="middle" justify="center">
                      <Col span={6} className="wrap_Badge">
                        <Badge count={5}>
                          <TeamOutlined />
                          {/* <a href="#" className="head-example" /> */}
                        </Badge>
                      </Col>
                      <Col span={6} className="wrap_Badge">
                        <Badge count={5}>
                          <TeamOutlined />
                          {/* <a href="#" className="head-example" /> */}
                        </Badge>
                      </Col>
                      <Col span={10} className="wrap_Badge"></Col>
                    </Row>
                  </Col>
                </Row>
              </Header>
              <Content>
                <AdminPage />
              </Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        )}
      />
    </Switch>
  )
}

export default AdminRoute

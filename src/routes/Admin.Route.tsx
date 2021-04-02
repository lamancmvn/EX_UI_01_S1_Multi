import { PATH } from "../constants/paths"
import { Switch, Route } from "react-router-dom"
import AdminPage from "../pages/Admin/Index"
import { Layout, Menu, Row, Col, Badge } from "antd"
import HeaderCommon from "../common/components/HeaderComponent"
import "./Admin.Style.css"
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined
} from "@ant-design/icons"
import SiderCommon from "../common/components/SiderComponent"
const { SubMenu } = Menu
const { Header, Content, Sider, Footer } = Layout
const AdminRoute = ({ routes }: any) => {
  return (
    <Switch>
      <Route
        exact
        path={PATH.ADMIN}
        component={() => (
          <Layout style={{ height: "100vh" }} className="adminLayout">
            <SiderCommon />
            <Layout>
              <HeaderCommon />
              <Content>
                <AdminPage />
              </Content>
            </Layout>
          </Layout>
        )}
      />
    </Switch>
  )
}

export default AdminRoute

import React from "react"
import { Layout, Badge, Row, Col } from "antd"
import { TeamOutlined } from "@ant-design/icons"

const { Header } = Layout
const HeaderCommon = () => {
  return (
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
  )
}

export default HeaderCommon

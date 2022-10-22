import React from "react";
import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";
import { IoHome } from "react-icons/io5";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { BsSearch, BsCart } from "react-icons/bs";
import { Button } from "antd";

function Header() {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <a href="https://www.antgroup.com">1st menu item</a>,
        },
        {
          key: "2",
          label: <a href="https://www.antgroup.com">1st menu item</a>,
        },
      ]}
    />
  );

  return (
    <>
      <div className="navigation">
        <div className="navbar">
          <p>Alba Helpline: 04829 222776</p>
          <div className="signIn">
            <p>Register</p>
            <p>Login</p>
          </div>
        </div>
        <div className="header">
          <div className="header-left">
            <Card
              style={{
                width: 200,
                border: "0",
                display: "flex",
                flexDirection: "row",
              }}
              bodyStyle={{}}
            >
              <h1>
                <span style={{ color: "#940d1b" }}>
                  <b>LOGO</b>
                </span>
              </h1>
              <span>
                <IoHome style={{ color: "#90A1B5" }} />
                &nbsp;
                <p
                  style={{
                    display: "inline",
                    fontSize: "11px",
                    color: "#90A1B5",
                  }}
                >
                  &#62;
                </p>
                <p
                  style={{
                    color: "#940d1b",
                    display: "inline",
                    fontSize: "14px",
                  }}
                >
                  {" "}
                  About Us
                </p>
              </span>
            </Card>
          </div>
          <div className="header-center">
            <Card
              style={{
                border: "0",
                display: "flex",
                gap: "0 40px",
              }}
            >
              <Button
                style={{ border: "0", boxShadow: "0", marginRight: "20px" }}
              >
                <h5>HOME</h5>
              </Button>

              <Dropdown overlay={menu}>
                <a
                  onClick={(e) => e.preventDefault()}
                  style={{ marginRight: "40px", display: "inline" }}
                >
                  <Space>
                    <h5>MEN</h5>
                    <DownOutlined style={{ color: "black" }} />
                  </Space>
                </a>
              </Dropdown>
              <Dropdown overlay={menu}>
                <a
                  onClick={(e) => e.preventDefault()}
                  style={{ marginRight: "40px", display: "inline" }}
                >
                  <Space>
                    <h5>WOMEN</h5>
                    <DownOutlined style={{ color: "black" }} />
                  </Space>
                </a>
              </Dropdown>
              <Dropdown overlay={menu}>
                <a
                  onClick={(e) => e.preventDefault()}
                  style={{ marginRight: "40px", display: "inline" }}
                >
                  <Space>
                    <h5>GIRLS</h5>
                    <DownOutlined style={{ color: "black" }} />
                  </Space>
                </a>
              </Dropdown>
              <Dropdown overlay={menu}>
                <a
                  onClick={(e) => e.preventDefault()}
                  style={{ marginRight: "40px", display: "inline" }}
                >
                  <Space>
                    <h5>BOYS</h5>
                    <DownOutlined style={{ color: "black" }} />
                  </Space>
                </a>
              </Dropdown>
            </Card>
          </div>
          <div className="header-right">
            <Card
              className="header-right-card"
              style={{
                width: 300,
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                border: "0",
                position: "relative",
              }}
            >
              <BsSearch style={{ marginLeft: "20px", fontSize: "15px" }} />
              <BsCart style={{ marginLeft: "20px", fontSize: "15px" }} />
              <div className="cart cart-items">0</div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

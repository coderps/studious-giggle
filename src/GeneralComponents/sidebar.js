import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faAngleDoubleLeft,
  faCoffee,
  faDesktop,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../static/images/sample-logo.png";
import "react-pro-sidebar/dist/css/styles.css";
import "../static/style.scss";

// Sidebar Menu
const Sidebar = (props) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const controller = (
    <div
      onClick={() => setCollapsed(!collapsed)}
      className={collapsed ? "toggle-menu-collapsed" : "toggle-menu"}
    >
      <FontAwesomeIcon icon={collapsed ? faHamburger : faAngleDoubleLeft} />
    </div>
  );

  return (
    <div className="sidebar">
      <ProSidebar width={280} collapsed={collapsed}>
        <SidebarHeader>
          {controller}
          {collapsed ? "" : <img src={logo} />}
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape={collapsed ? "circle" : "square"}>
            <MenuItem
              icon={
                <div onClick={() => window.open("/dashboard")}>
                  <FontAwesomeIcon icon={faCoffee} />
                </div>
              }
            >
              Dashboard
            </MenuItem>
            <SubMenu
              title="Components"
              icon={<FontAwesomeIcon icon={faDesktop} />}
            >
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter>This is a footer</SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;

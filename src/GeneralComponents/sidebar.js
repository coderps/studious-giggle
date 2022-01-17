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
import {
  faAngleDoubleLeft,
  faCoffee,
  faDesktop,
  faHamburger,
  faQuidditch,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../static/images/sample-logo.png";
import "react-pro-sidebar/dist/css/styles.css";
import "../static/style.scss";

// Sidebar Menu
const Sidebar = (props) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const username = "Prax";
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
          {collapsed ? (
            ""
          ) : (
            <img
              src={logo}
              alt="Company Logo"
              onClick={() => window.open("/", "_self")}
            />
          )}
        </SidebarHeader>
        <SidebarContent>
          {collapsed ? (
            ""
          ) : (
            <div className="welcome">
              Hello {username}, where can I take you?
            </div>
          )}
          <Menu iconShape={collapsed ? "circle" : "square"}>
            <MenuItem
              icon={<FontAwesomeIcon icon={faCoffee} />}
              onClick={() => window.open("/dashboard", "_self")}
              children={"Dashboard"}
            />
            <SubMenu
              title="Resources"
              icon={<FontAwesomeIcon icon={faDesktop} />}
              children={
                <>
                  <MenuItem
                    onClick={() => window.open("text-summarization", "_self")}
                  >
                    Text Summarization
                  </MenuItem>
                  <MenuItem>Component 2</MenuItem>
                </>
              }
            />
            <MenuItem
              icon={<FontAwesomeIcon icon={faQuidditch} />}
              children={"Logout"}
            />
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <div className="footer">Copyright &#169; 2022</div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;

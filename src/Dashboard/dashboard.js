import "react-pro-sidebar/dist/css/styles.css";
import Sidebar from "../GeneralComponents/sidebar";
import Content from "./content";

const Dashboard = (props) => {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
};

export default Dashboard;

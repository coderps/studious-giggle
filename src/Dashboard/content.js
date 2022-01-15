import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../static/style.scss";

const Content = (props) => {
  return (
    <div className="content">
      <Router>
        <Routes>
          <Route path="/" element={"Home Page"} />
          <Route path="/dashboard" element={"Dashboard"} />
          <Route exact path="/other" element={"Other"} />
        </Routes>
      </Router>
    </div>
  );
};

export default Content;

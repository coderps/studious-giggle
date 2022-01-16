import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../static/style.scss";
import TextSummarization from "../TextSummarization/textSummarization";

const Content = (props) => {
  return (
    <div className="content">
      <Router>
        <Routes>
          <Route path="/" element={"Home Page"} />
          <Route path="/dashboard" element={"Dashboard"} />
          <Route path="/text-summarization" element={<TextSummarization />} />
          <Route exact path="/other" element={"Other"} />
        </Routes>
      </Router>
    </div>
  );
};

export default Content;

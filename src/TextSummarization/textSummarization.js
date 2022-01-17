import React from "react";
import getLanguages from "../GeneralComponents/languages";

const TextSummarization = (props) => {
  const [summary, setSummary] = React.useState();
  const [lang, setLang] = React.useState("en");
  const [value, setValue] = React.useState("");

  const languages = getLanguages();
  const axios = require("axios").default;

  const getSummary = () => {
    const options = {
      method: "GET",
      url: "https://coderps.pythonanywhere.com/?input=" + value,
    };
    console.log("sending payload", options);
    value !== ""
      ? axios(options)
          .then((response) => setSummary(response.data.result))
          .catch((err) => console.log("got error", err))
      : console.log(
          "No API call made because there is no text available to summarize"
        );
  };

  return (
    <div>
      Text:
      <br />
      <textarea
        rows={10}
        cols={100}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <select onChange={(e) => setLang(e.target.value)}>
        {languages.text.map((lng, idx) => (
          <option key={idx} value={lng.code}>
            {lng.language}
          </option>
        ))}
      </select>
      <br />
      <button onClick={getSummary}>Submit!</button>
      <br />
      Lang: {lang}
      <br />
      Summary:
      <br />
      {summary}
    </div>
  );
};

export default TextSummarization;

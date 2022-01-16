import React from "react";

const TextSummarization = (props) => {
  const [summary, setSummary] = React.useState();
  return (
    <div>
      Text:
      <br />
      <textarea rows={10} cols={100} />
      <br />
      <button onClick={() => setSummary("This is a summary of your text")}>
        Submit!
      </button>
      <br />
      Summary:
      <br />
      {summary}
    </div>
  );
};

export default TextSummarization;

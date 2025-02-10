import React from "react";

const names = [
  "Adam",
  "Abbott",
  "Addison",
  "Albert",
  "Aldrich",
  "Alfred",
  "Arnold",
  "Baldwin",
  "Benedict",
  "Bernard",
  "Brian",
  "Byron",
  "Calvert",
  "Chad",
  "Charles",
  "Christian",
  "Christopher",
  "Clive",
  "Brian",
  "Byron",
];

const Panthers = () => {
  return (
    <div className="panthers">
      <h1>Panthers</h1>
      <table>
        {names.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Panthers;

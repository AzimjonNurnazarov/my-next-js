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

const DreamTeam = () => {
  return (
    <div className="dreamteam">
      <h1>DreamTeam</h1>
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

export default DreamTeam;

import React from "react";

// const names = [
//   "Adam",
//   "Abbott",
//   "Addison",
//   "Albert",
//   "Aldrich",
//   "Alfred",
//   "Arnold",
//   "Baldwin",
//   "Benedict",
//   "Bernard",
//   "Brian",
//   "Byron",
//   "Calvert",
//   "Chad",
//   "Charles",
//   "Christian",
//   "Christopher",
//   "Clive",
//   "Brian",
//   "Byron",
// ];

const BackstreetBoys = () => {
  return (
    <div className="backstreetboys">
      <h1>BackstreetBoys</h1>
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

export default BackstreetBoys;

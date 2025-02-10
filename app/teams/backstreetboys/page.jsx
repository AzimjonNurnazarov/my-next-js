import React from "react";

const names = [
  "Adam", "Abbott", "Addison", "Albert", "Aldrich", "Alfred", "Arnold",
  "Baldwin", "Benedict", "Bernard", "Brian", "Byron", "Calvert", "Chad",
  "Charles", "Christian", "Christopher", "Clive", "Brian", "Byron"
];

const BackstreetBoys = () => {
  return (
    <div className="backstreetboys">
      <h1>Backstreet Boys</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {names.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BackstreetBoys;

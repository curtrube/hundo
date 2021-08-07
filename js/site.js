'use strict';

const getResults = () => {
  let minValue = document.getElementById('minValueInput').value;
  let maxValue = document.getElementById('maxValueInput').value;

  if (minValue) {
    const results = {
      minValue: minValue,
      maxValue: maxValue,
    };
    console.log(results);
  }

  if (minValue < maxValue) {
    let tableBody = document.getElementById('resultsBody');
    tableBody.innerHTML = ``;

    for (let i = minValue; i <= maxValue; i++) {
      let tableRow = document.createElement('tr');
      let tableData = document.createElement('td');

      tableData.innerHTML = `${i}`;
      tableRow.appendChild(tableData);
      tableBody.appendChild(tableRow);
    }
  }
};

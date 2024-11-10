export function generateTableHTML(studentData) {
  if (studentData.length === 0) return "";


  const headers = Object.keys(studentData[0]);


  const tableHTML = `
    <table class="table table-hover table-bordered">
      <thead class="thead-dark">
        <tr>
          ${headers.map((header) => `<th>${header}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${studentData.map(
          (student) => `
            <tr>
              ${headers
                .map((header) => {
                  return `<td>${
                    Array.isArray(student[header])
                      ? student[header].join(", ")
                      : student[header]
                  }</td>`;
                })
                .join("")}
            </tr>`
        ).join("")}
      </tbody>
    </table>
  `;


  return tableHTML;
}

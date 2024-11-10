export function calculateAverageMarks(students) {
  return students.map((student) => {
    const totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
    const averageMarks = (totalMarks / student.marks.length).toFixed(2);
    return { name: student.name, averageMarks };
  });
}


export function computeStudentStatistics(students) {
  return students.map((student) => {
    const totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
    const averageMarks = (totalMarks / student.marks.length).toFixed(2);
    const ceil = student.marks.some((mark) => mark < 7) ? true : "";

    return { ...student, averageMarks, ceil };
  });
}

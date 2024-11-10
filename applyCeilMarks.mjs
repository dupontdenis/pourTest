export function applyCeilMarks(students) {
  return students.map((student) => {
    const ceil = student.marks.some((mark) => mark < 7);
    if (ceil) {
      return { ...student, ceil };
    } else {
      return { ...student };
    }
  });
}

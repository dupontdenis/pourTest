import { generateStudentCard } from "./card.mjs";

export function createStudentCards(students) {
  return students.map((student) => generateStudentCard(student));
}
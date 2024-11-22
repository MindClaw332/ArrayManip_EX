const students = [
    { name: "Alice", age: 22, grade: "A", major: "Computer Science" },
    { name: "Bob", age: 20, grade: "B", major: "Mathematics" },
    { name: "Charlie", age: 23, grade: "A", major: "Physics" },
    { name: "Diana", age: 21, grade: "B", major: "Computer Science" },
    { name: "Eve", age: 19, grade: "C", major: "Biology" }
];

// Tasks:
// 1. Create an array of just student names
let studentNames = students.map(student => student.name);
console.log(studentNames);

// 2. Filter students with grade "A"
let goodStudents = students.filter(student => student.grade === 'A')
console.log(goodStudents)

// 3. Calculate the average age of all students
let averageAge = students.reduce((total, student) => (total + student.age), 0) / students.length;
console.log(averageAge);
// 4. Create a new array with students' names in uppercase
let uppercaseNames = students.map(student => student.name.toUpperCase());
console.log(uppercaseNames);
// 5. Find the youngest student in the roster
let sortedNames = students.sort((a, b) => a.age - b.age);
let lowestage = sortedNames.filter(student => student.age === sortedNames[0].age)
console.log(sortedNames);
console.log(lowestage);
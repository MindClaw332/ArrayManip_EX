const courses = [
    {
        id: "CS101",
        title: "Intro to Programming",
        category: "Computer Science",
        difficulty: "Beginner",
        price: 49.99,
        students: 1500,
        ratings: [4.5, 4.7, 4.2, 4.8, 4.6]
    },
    {
        id: "MATH202",
        title: "Advanced Calculus",
        category: "Mathematics",
        difficulty: "Advanced",
        price: 79.99,
        students: 750,
        ratings: [4.3, 4.1, 4.6, 4.4, 4.5]
    },
    {
        id: "DUTCH101",
        title: "Dutch Basics",
        category: "Language",
        difficulty: "Beginner",
        price: 99.99,
        students: 250,
        ratings: [5.0, 3.2, 4.2, 4.9, 3.7]
    },
    // ... more courses
];

// Tasks:
// 1. Calculate the average rating for each course
const averageRatings = [];
courses.forEach(course => {
    const newObj = {
        courseName: course.title,
        courseRating: course.ratings.reduce((total, rating) => total + rating) / course.ratings.length
    }
    averageRatings.push(newObj);
})

console.log(averageRatings);
// 2. Find all beginner-level courses
let beginnerFriendly = courses.filter(course => course.difficulty === 'Beginner');
console.log(beginnerFriendly)
// 3. Sort courses by number of students (descending)
let coursessorted = courses.sort((a, b) => b.students - a.students);
console.log(coursessorted);
// 4. Group courses by category
let groupedArray = Object.groupBy(courses, ({category}) => category);
console.log(groupedArray, '4')
// 5. Calculate total revenue from all courses
let totalRevenue = courses.reduce((total, course) => total + (course.price * course.students), 0)
console.log(totalRevenue)
// 6. Find the highest-rated course
let highestRated = averageRatings.sort((a, b) => b.courseRating - a.courseRating)
highestRated = highestRated[0];
console.log(highestRated);
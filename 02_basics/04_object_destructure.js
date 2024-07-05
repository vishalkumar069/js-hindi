const course = {
    coursename: "JS in hindi",
    price: "999",
    courseinstructor: "Hitesh"
}
// --------Normal case--------------
// course.courseinstructor
// console.log(course.courseinstructor); // - to Print this we use---


// --------best with function() case--------------
// const {courseinstructor} = course
// console.log(courseinstructor);


// --------Destructure case--------------
const {courseinstructor: instrutor} = course   // Object Destructure--
console.log(instrutor);


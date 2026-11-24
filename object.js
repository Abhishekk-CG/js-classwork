// // 1.
// function book(title,author){
//     this.title=title;
//     this.author=author;
// };
// const book1=new book("The life of mahatma","Louis Fischer")
// const book2=new book("Brida","Unknown")
// console.log(book1)
// console.log(book2)
// // 2.
// const student=new Object();
// student.name="Rahul"
// student.age=18
// student.course="B.Tech"
// console.log(student)
// // 3.
// const book2 = {
//     Name: "The life of mahatma",
//     Author: "Louis Fischer",
// };
// console.log(book2)
// function book(Name,Author){
//     this.Name=Name
//     this.Author=Author
// };
// const book1=new book("The life of mahatma","Louis Fischer");
// console.log(book1)
// // 4.
// const person = {
// };
// person.name="Rahul";
// person.age=18;
// person.city="Gandhinagar";
// console.log(person)

// // 5.
// const product = {
//     name: "Samsung s26 ultra",
//     colour: [
//         "Black",
//         "Blue",
//         "Red"
//     ],
//     manufactured: {
//         name: "Samsung Electronics",
//         country: "South korea"
//     },
//     getdetails: function(){
//         return "This is a "+this.name+" product, manufactured by "+this.manufactured.name+"."
//     }
// };
// console.log(product.getdetails())
// // 6.
// const course={
//     title: "Javascript",
//     duration: "2 Hrs",
//     topics: ["Basics","Functions","Scope","Arrays"],
//     instructor: {
//         name: "Vikram",
//         experience: "12yrs"
//     },
//     getinfo: function(){
//         return this.title+" by "+this.instructor.name + " sir."
//     }
// };
// console.log(course.getinfo())
// // 7.
// const product={
//     name: "Macbook air m1 2020",
//     "manufacturer name": "Apple pvt. ltd.",
//     getDetais:function(){
//         return this.name+ " is manufactured by "+this["manufacturer name"]
//     }
// };
// console.log(product.getDetais())
// // 8.
// const person={
//     firstName: "Abhishek",
//     lastName: "Thakur",
//     age: 18,
//     getFullName: function(){
//         return "Full Name = "+this.firstName+" "+this.lastName
//     },
//     isAdult: function(){
//         if(this.age>=18){
//             return "True"
//         }else{
//             return "False"
//         };
//     }
// };
// console.log(person.getFullName())
// console.log(person.isAdult())
// // 9.
// const student={
//     name: "Rahul",
//     age: 18,
//     class: 12,
//     school: "SU"
// };
// for(let key in student){
//     console.log(key+": ",student[key])
// };
// // 10.
// const product={
//     name: "Iphone _ pro",
//     brand: "Apple"
// };
// let count=0;
// for (let key in product){
//     count++;
// };
// console.log(count)
// 11.
const company={
    address:{
        city: "Ahmedabad",
        pincode: 373821
    },
    employees:["Abhishek","Abhinav","Abhinash"]
};
for(let key in company.)
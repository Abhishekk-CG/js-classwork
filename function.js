// functions_ and_scope
// 1.
function greet(name){
    return "Welcome to Coding Gita,"+name;
}
console.log(greet("Abhishek"))
// 2.
function avg(n1,n2,n3){
    return avg=(n1+n2+n3)/3
};
console.log(avg(5,10,15))
// 3.
const percentage=function(marks,total){
    return (marks/total)*100;
};
console.log(`${percentage(89,100)}%`)

// 4.
function isEven(num){
    if(num%2===0){
        return("Number is Even")
    }else{
        return("Number is odd")
    }
};
console.log(isEven(1))
// 5.
function sum(a,b,c){
    return sum=(a+b+c)
};
console.log(sum(10,20,30));
// 6.
function avgOfTwo(x,y){
    return avgOfTwo=(x+y)/2;
};
console.log(avgOfTwo(50,70))
// 7.
function displayAge(){
    let age=20;
    console.log(age);
};
// console.log(age) It will give ReferenceError.
// 8.
function studentInfo(name,m1,m2,m3){
    totalMarks=m1+m2+m3;
    average=totalMarks/3
    return (`${name} has scored total ${totalMarks} marks and average is ${average} marks.`)
};
console.log(studentInfo("Abhishek",89,89,89));
// 9.
function reportCard(name,m1,m2){
    totalMarks=m1+m2;
    average=(totalMarks/2).toFixed(1)
    return (`${name} has scored total ${totalMarks.toFixed(1)} marks and average is ${average} marks.`)
};
console.log(reportCard("Abhishek",8.90,9.80));
// 10.
function studentReport(name, m1, m2){
    function total(m1,m2){
        return m1+m2
    };
    let totalMarks=total(m1,m2);
    return `the student ${name} has secured total of ${totalMarks} marks.`
}
console.log(studentReport("Abhishek",98,89));
// 14.
function studentSummary(name,m1,m2,m3){
    function findTotal(){
        return m1+m2+m3
    }
    function findAverage(){
        return (m1+m2+m3)/3
    }
    return(`${name} has scored total of ${findTotal} marks and `)
}
// 15.
for (var i = 1; i <= 3; i++) {
    console.log("Inside:", i);
}

console.log("Outside:", i);
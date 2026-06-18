let newDate = new Date();

console.log(newDate);

console.log(newDate.toString());
console.log(newDate.toLocaleString());
console.log(newDate.toDateString());

console.log(typeof(newDate));


let myCreatedDate = new Date(2007 , 10 , 30);

console.log(myCreatedDate.toDateString());


let myTimeStamp =  Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor((Date.now())/1000));

console.log(newDate.getMonth() + 1);



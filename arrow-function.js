


const greet = (name) => "Hello," + name;

console.log(greet("rohith"));
console.log(greet("roh"));



//map method
const numbers = [1,2,3,4,5];

const doubled = numbers.map(num => num * 2);
console.log(doubled);

//filter method

const filter_number = [1,2,3,4,5,6];
const even = filter_number.filter(num => num%2 == 0);
console.log(even);


//reduce method

sum_number = [1,2,3,4,5];
sum = sum_number.reduce((accumulater,currentValue) => accumulater + currentValue);
console.log(sum);




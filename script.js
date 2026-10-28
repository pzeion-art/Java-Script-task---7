
console.log("===== PART 1: ARRAY HIGHER-ORDER METHODS =====");

let numbers1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
numbers1.forEach(function(number) {
    console.log(number);
});

let numbers2 = [1, 2, 3, 4, 5];
let multiplied = numbers2.map(number => number * 5);
console.log(multiplied);

let numbers3 = [10, 25, 15, 30, 40, 5];
let greaterThan20 = numbers3.filter(number => number > 20);
console.log(greaterThan20);

let employees = [
    { name: "Arun", salary: 250000 },
    { name: "Bala", salary: 350000 },
    { name: "David", salary: 200000 },
    { name: "John", salary: 400000 }
];

let lowSalary = employees.filter(employee => employee.salary <= 300000);
console.log(lowSalary);

let firstEmployee = employees.find(employee => employee.salary > 200000);
console.log(firstEmployee);

let numbers6 = [10, 20, 30, 40, 50];
let total = numbers6.reduce((sum, number) => sum + number, 0);
console.log("Total:", total);

let numbers7 = [1, 3, 5, 8, 9];
console.log(numbers7.some(number => number % 2 === 0));

let numbers8 = [10, 20, 30, 40];
console.log(numbers8.every(number => number > 0));

let numbers9 = [50, 10, 40, 20, 30];
numbers9.sort((a, b) => a - b);
console.log(numbers9);

let numbers10 = [50, 10, 40, 20, 30];
numbers10.sort((a, b) => b - a);
console.log(numbers10);


console.log("===== PART 2: STRING METHODS =====");

let text11 = "javascript";
console.log(text11.charAt(4));

console.log(text11.charCodeAt(2));

let text13 = "   Hello JavaScript   ";
console.log(text13.trim());

let text14 = "JavaScript";
console.log(text14.toUpperCase());
console.log(text14.toLowerCase());

let text15 = "I am learning JavaScript";
console.log(text15.includes("script"));

let text16 = "JavaScript";
console.log(text16.startsWith("Java"));
console.log(text16.endsWith("Script"));

let text17 = "java is easy and java is useful";
console.log(text17.replaceAll("java", "python"));

let text18 = "html-css-javascript-react";
console.log(text18.split("-"));

let names19 = ["Arun", "Bala", "David", "John"];
console.log(names19.join(", "));

let text20 = "JavaScript Programming";
console.log(text20.slice(0, 10));


console.log("===== PART 3: DATE METHODS =====");

let today = new Date();
console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Date:", today.getDate());
console.log("Day:", today.getDay());

let months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];
console.log("Current Month:", months[today.getMonth()]);

console.log("Hours:", today.getHours());
console.log("Minutes:", today.getMinutes());
console.log("Seconds:", today.getSeconds());

let myDate = new Date();
myDate.setFullYear(2003);
myDate.setMonth(0); // January = 0
myDate.setDate(30);
console.log(myDate);


console.log("===== PART 4: ASYNCHRONOUS JAVASCRIPT =====");


setTimeout(function() {
    console.log("Welcome to JavaScript");
}, 3000);

let interval = setInterval(function() {
    console.log("Learning JavaScript");
}, 2000);

setTimeout(function() {
    clearInterval(interval);
    console.log("Interval stopped");
}, 8000);


function one() {
    console.log("One");
}

function two() {
    console.log("Two");
}

function three() {
    console.log("Three");
}

one();
setTimeout(two, 0);
three();



console.log("===== PART 5: PROMISES AND API FETCHING =====");


let promise29 = new Promise(function(resolve, reject) {
    resolve("Login successful");
});

promise29.then(function(message) {
    console.log(message);
});


let promise30 = new Promise(function(resolve, reject) {
    reject("Invalid password");
});

promise30.catch(function(error) {
    console.log(error);
});


let promise31 = new Promise(function(resolve, reject) {
    resolve("Task completed successfully");
});

promise31
    .then(message => console.log(message))
    .catch(error => console.log(error))
    .finally(() => console.log("Process completed"));

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            console.log(product.title);
        });
    })
    .catch(error => console.warn(error))
    .finally(() => console.log("Task 32 completed"));

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            console.log(
                "Title:", product.title,
                "Price:", product.price,
                "Category:", product.category
            );
        });
    })
    .catch(error => console.warn(error));

// Task 34: Handle API errors
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("API request failed");
        }
        return response.json();
    })
    .then(products => console.log(products))
    .catch(error => console.warn("Error:", error.message));


fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("API request failed");
        }
        return response.json();
    })
    .then(products => console.log(products))
    .catch(error => console.warn("Error:", error.message))
    .finally(() => console.log("API call completed"));


console.log("===== PART 6: REAL-TIME MINI TASKS =====");


let employees36 = [
    { name: "Arun", salary: 250000 },
    { name: "Bala", salary: 350000 },
    { name: "David", salary: 180000 },
    { name: "John", salary: 280000 }
];

employees36
    .filter(employee => employee.salary < 300000)
    .forEach(employee => {
        console.log(employee.name, "Salary:", employee.salary);
    });

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        let productList = products.map(product => ({
            title: product.title,
            price: product.price
        }));
        console.log(productList);
    })
    .catch(error => console.warn(error))
    .finally(() => console.log("Task 37 completed"));


fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        let selectedCategory = "electronics";

        let filteredProducts = products.filter(product =>
            product.category === selectedCategory
        );

        console.log("Category:", selectedCategory);
        console.log(filteredProducts);
    })
    .catch(error => console.warn(error))
    .finally(() => console.log("Task 38 completed"));

let numbers39 = [10, 15, 20, 25, 30];

let doubled = numbers39.map(number => number * 2);
console.log("Doubled:", doubled);

let evenNumbers = numbers39.filter(number => number % 2 === 0);
console.log("Even Numbers:", evenNumbers);

let sum39 = numbers39.reduce((sum, number) => sum + number, 0);
console.log("Total:", sum39);

let hasNumberOver20 = numbers39.some(number => number > 20);
console.log("Any number > 20:", hasNumberOver20);

let allPositive = numbers39.every(number => number > 0);
console.log("All numbers positive:", allPositive);


fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Unable to fetch products");
        }
        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            console.log(
                "Title:", product.title,
                "| Price:", product.price,
                "| Category:", product.category
            );
        });
    })
    .catch(error => {
        console.warn("Error:", error.message);
    })
    .finally(() => {
        console.log("API call completed");
    });

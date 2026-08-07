// task1
console.log("JS is running successfully");

// task2

window.alert("Ready to practice!");

// task3

var productName = "Laptop";
var price = 15000;
var isAvailable = true;
console.log(productName, typeof productName);
console.log(price, typeof price);
console.log(isAvailable, typeof isAvailable);

// task4

var myElement = document.getElementById("mainTitle");
console.log(myElement);

myElement.innerText = "Practice Time";

// task5

var city = "Cairo";
var country = "Egypt";
console.log(city + country);

// task 6
console.log(`Location: ${city} - ${country}`);

// task 7

var itemprice = 120;
var quantity = 3;
var total = itemprice * quantity;
var min = 400 - total;
var divide = itemprice / quantity;
var Mul = itemprice * quantity;
var mod = itemprice % quantity ;
var power = quantity ** 2;

console.log(`Item price : ${itemprice} , Quantity : ${quantity} , Total : ${total} , Min : ${min} , Divide : ${divide} , Mul : ${Mul} , Mod : ${mod} , Power : ${power}`)

// task 8

var favColor = prompt("What is your favourite Color");
console.log(`Your favorite color is: ${favColor}`);

// task 9


var score = 20;
var textScore = "20";

console.log(score == textScore); //* True double equal compare value only
console.log(score === textScore); //! False trible equal compare value and Type

// task 10


var quantity2 = prompt("What is the quantity");
var numQuantity = +quantity2;
var numQuantity2 = Number(quantity2);
var numQuantity3 = parseInt(quantity2);
console.log(
  `User Quantity : ${quantity2} . And the Type is : ${typeof quantity2}`,
);
console.log(
  `User Quantity using +: ${numQuantity} . And the Type using + is : ${typeof numQuantity}`,
);
console.log(
  `User Quantity using Number: ${numQuantity2} . And the Type using Number is : ${typeof numQuantity2}`,
);
console.log(
  `User Quantity using parseInt: ${numQuantity3} . And the Type using parseInt is : ${typeof numQuantity3}`,
);

// task 11

var fruits = ["apple", "banana", "mango"];
console.log(fruits[1]);
fruits[1] = "orange";
fruits.push("grape");
console.log(fruits);

// task 12

var course = {
  title: "MEAN",
  hours: 6,
  level: "Med",
};
course.title = "MEARN";
console.log(course.hours);
console.log(course);

// task 13

var hasAccount = true;
var isVerified = false;

console.log(hasAccount && isVerified);
console.log(hasAccount || isVerified);
console.log(!isVerified);

// task 14

var balance = 50;
console.log(balance);
balance += 30;
console.log(balance);
balance *= 2;
console.log(balance);
balance -= 20;
console.log(balance);

// task 15

var hotel = prompt("What is the name of the hotel");
var nightsNumber = prompt("How many nights you will spend here");
var confirm = confirm("Are You Sure about it");
window.alert(`Hotel: ${hotel}, Nights: ${nightsNumber}, Confirmed: ${confirm}`);
console.log(`Hotel: ${hotel}, Nights: ${nightsNumber}, Confirmed: ${confirm}`);

// task 16

console.log(2 + 8 + "0"); //* 100 as string
console.log("2" + 8 + 0); //! 280 as string
console.log(2 + "8" + 0); //* 280 as string

// task 17

var city1 = "Alex";
var city2 = city1; //* city2 => Alex
city2 = "Giza"; //* city2 => Giza
console.log(city1, city2); //! city1 => Alex  ,  city2 => Giza

var car1 = { brand: "Toyota" };
var car2 = car1; //* car2 = { brand: "Toyota" }
car2.brand = "Honda"; //* car2 = { brand: "Honda" }
console.log(car1, car2); //! car1 = { brand: "Honda" } , car2 = { brand: "Honda" }

Object.assign(car2, car1);
console.log(car1, car2); //! car1 = { brand: "Honda" } , car2 = { brand: "Honda" }

// task 18

var mixedBag = [
  "youssef",
  20,
  true,
  null,
  undefined,
  [1, "Khaled"],
  { title: "MEAN", hours: 3 },
];
console.log(typeof mixedBag[0]);
console.log(typeof mixedBag[1]);
console.log(typeof mixedBag[2]);
console.log(typeof mixedBag[3]);
console.log(typeof mixedBag[4]);
console.log(typeof mixedBag[5]);
console.log(typeof mixedBag[6]);

// task 19

var name = prompt("Customer Name : ");
var price = +prompt("Price : ");
var confirm = confirm("Is the pay done ?");
console.log(
  `Customer Name : ${name} , Price : ${price} , Is Confirm : ${confirm}`,
);
window.alert(
  `Customer Name : ${name} , Price : ${price} , Is Confirm : ${confirm}`,
);
var resultElement = (document.getElementById("result").innerText =
  `Customer Name : ${name} , Price : ${price} , Is Confirm : ${confirm}`);

// task 20

var num1 = +prompt("The First Number : ");
var num2 = +prompt("The Second Number : ");
console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);

// task 21

var a = 40;
var b = 50;
var c = "60";
var d = 30;
var e = 30;
console.log(a + b + +c + d + e); //* C is string so it concat the result i use + to convert the string to number

// task 22

function makeInvoiceLine(item, qty, paid) {
  return `Invoice => Item: ${item} | Qty: ${qty} | Paid: ${paid}`;
}

console.log(makeInvoiceLine("Mouse", 2, true));

// task 23

function saveUsername() {
  const name = document.getElementById("username");
  const result = document.getElementById("result");

  if (username === "") {
    result.innerText = "Username is required";
    return; 
  }

  result.textContent = `Name: ${username}`;

  console.log({
    username: username,
    status: "saved",
  });
}

// task 24

var a = "15";
var b = 15;
var c = null;
var d;
var e = [15];
var f = { value: 15 };
console.log(a, typeof a, a == 15, a === 15);
console.log(b, typeof b, b == 15, b === 15);
console.log(c, typeof c, c == 15, c === 15);
console.log(d, typeof d, d == 15, d === 15);
console.log(e, typeof e, e == 15, e === 15);
console.log(f, typeof f, f == 15, f === 15);

// task 25

var productName = prompt("Write the product Name ");
var productPrice = +prompt("Write the product Price");
var productBrand = prompt("Write the product Brand");
var productCategory = prompt("Write the product Catergoy");
var productConfirm = (confirm = confirm("Is this product in stock?"));

var productInfo = {
  name: productName,
  price: productPrice,
  brand: productBrand,
  category: productCategory,
  inStock: productConfirm,
};

console.log(productInfo);
window.alert(`Product Name : ${productInfo.name} , Product Price :${productInfo.price}
    Product Brand : ${productInfo.brand} , Product Category : ${productInfo.category} , In Stock : ${productInfo.inStock}`);
document.getElementById("productInfo").innerText =
  `Product Name : ${productInfo.name} , Product Price :${productInfo.price}
Product Brand : ${productInfo.brand} , Product Category : ${productInfo.category} , In Stock : ${productInfo.inStock}`;

console.log(productInfo.name[0]);
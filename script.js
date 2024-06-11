/*
Exploring Conditional Statements and Loops

Objective: The aim of this assignment is to familiarize students with conditional statements
and loops in JavaScript and enhance their problem-solving skills using these control structures.

Problem Statement: You are tasked with creating a JavaScript program that simulates a simple online shopping experience.
The program should allow users to browse products, add them to a cart, and calculate the total cost of their purchase.

Task 1: Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart.
This can be done with creating a simple variable that represents whether or not the user is logged in.

Task 2: Use a loop to display the list of available products to the user and add functionality for users to add products to their cart.
You can hard code this out by just creating item variables or for EXTRA CREDIT figure out a way to grab user inputs using prompt(). 

Task 3: Calculate the total cost of the items in the cart and display it to the user.
*/

let loggedIn = false;

const inventory = {
    "apple": .99,
    "banana": .39,
    "mango": 1.49
};

if (loggedIn) {
    console.log("Available items are as follows");
    for(const item in inventory) {
        console.log(`${item}: $${inventory[item]}`);
    };
    let cost = 0;
    let checkout = false;
    do {
        choice = prompt("Select an item to add to cart, or hit cancel to checkout");
        if (choice === null) {
            checkout = true;
        } else if (choice.toLowerCase() in inventory) {
            cost += inventory[choice.toLowerCase()];
        } else {
            console.log(`We don't carry ${choice}`)
        }
    } while (!checkout);
    console.log(`Total cost of order: ${cost}`);
} else {
    console.log("Please log in to shop...");
}

/*
Exploring Functions in JavaScript

Objective:
The aim of this assignment is to deepen students' understanding of functions in JavaScript
and their various applications in solving programming problems.

Problem Statement:
Your task is to develop a JavaScript program that simulates a simple banking system.
The program should include functions to perform basic banking operations such as deposit, withdrawal, and balance inquiry.

Task 1: Create a function to handle deposits into a bank account.

Task 2: Implement a function to handle withdrawals from a bank account, ensuring sufficient balance.

Task 3: Develop a function to check the current balance of the account.
*/

let account = {
    "balance": 5000
};

function deposit(account, amount) {
    account.balance += amount;
};

function withdraw(account, amount) {
    if (amount <= account.balance) {
        account.balance -= amount;
    } else {
        console.log("Insufficient funds");
    }
};

function getBalance(account){
    console.log(`Current balance: ${account.balance}`);
};

deposit(account, 1005);

withdraw(account, 2499);

getBalance(account);

withdraw(account, 10000)
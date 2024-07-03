import inquirer from "inquirer";

const lumber = await inquirer.prompt([
  {
    type: "number", // use "input" for user to put anything in prompt
    name: "num1",
    message: "Enter your 1st number",
  },

  {
    type: "number", // use "input" for user to put anything in prompt
    name: "num2",
    message: "Enter your 2nd number",
  },

  {
    type: "list",
    name: "operator",
    message: "select ur operator",
    choices: ["+", "-", "/", "*"],
  },
]);

console.log(lumber.num1, lumber.num2, lumber.operator);

function sum(num1: number, num2: number) {
  const result = num1 + num2;
  console.log("sum of num1 and num2 is = ", result);
}

function subtraction(num1: number, num2: number) {
  const result = num1 - num2;
  console.log("subtraction of num1 and num2 is = ", result);
}

function division(num1: number, num2: number) {
  if (num2 == 0) {
    console.log("Cannot be divided. Try again!");
  } else {
    const result = num1 / num2;
    console.log("division of num1 and num2 is = ", result);
  }
}

function multiplication(num1: number, num2: number) {
  const result = num1 * num2;
  console.log("multiplication of num1 and num2 is = ", result);
}

switch (lumber.operator) {
  case "+":
    sum(lumber.num1, lumber.num2);
    break;
  case "-":
    subtraction(lumber.num1, lumber.num2);
    break;
  case "*":
    multiplication(lumber.num1, lumber.num2);
    break;
  case "/":
    division(lumber.num1, lumber.num2);
    break;
}

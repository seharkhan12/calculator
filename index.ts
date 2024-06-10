#! /usr/bin/env/ node


import inquirer from "inquirer";

let answer = await inquirer.prompt([

  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "enter seconed number", type: "number", name: "seconddNumber" },
  {
    message: "select one of the operators to perform action ",
    type: "list",
    name: "operator",
    choices: ["addition",'subtraction',"multiplication","division"],
  },
]);
//conditional statment

if (answer.operator === "addition"){
  console.log(answer.firstNumber + answer.seconddNumber);
}
 else if (answer.operator === "subtraction"){
  console.log(answer.firstNumber - answer.secondNumber);
}
 else if (answer.operator === "multiplication"){

console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division"){
 console.log(answer.firstNumber / answer.secondNumber);
}

else {
  console.log("invalid input")
}

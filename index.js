import inquirer from "inquirer";
let myBalance = 5000;
let myPin = 1234;
console.log("wellcome to code with Ali - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code: ",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct, login successfully");
    //console.log(`Current Account Balance ${myBalance}`)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount you want to withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw Successfully`);
            console.log(`Current Account Balance: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Current Account Balance: ${myBalance}`);
    }
}
else {
    console.log("pin is incorrect, login failed");
}

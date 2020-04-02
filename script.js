// 'use strict'

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");


let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце");
let secondQuestion = prompt("Во сколько обойдется?");

var appData = {
    budget: money,
    timeData: time,
    expenses: {
        firstQuestion : secondQuestion
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

console.log(appData);


alert((money - secondQuestion)/30);

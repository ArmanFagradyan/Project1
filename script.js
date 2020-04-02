// 'use strict'

let money = prompt("Ваш бюджет на месяц?");
// console.log(money);

let time = prompt("Введите дату в формате YYYY-MM-DD");
// console.log(time);

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

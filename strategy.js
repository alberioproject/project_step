//интерфейс стратегия
function strategy()
{
    this.exec = function () { }
}
function plus()
{
    this.exec = function (a, b)
    { alert(a + b); }
}
plus.prototype = new strategy();
plus.prototype.constructor = plus;
//вычетание
function minus()
{
    this.exec = function(a,b)
    { alert(a - b); }
}
minus.prototype = new strategy();
minus.prototype.constructor = minus;
//умножения
function multiplication()
{
    this.exec = function (a, b)
    { alert(a * b); }
}
multiplication.prototype = new strategy();
multiplication.prototype.constructor = multiplication;
//деления
function division()
{
    this.exec = function (a, b)
    { alert(a / b); }
}
division.prototype = new strategy();
division.prototype.constructor = division;
//не знаю как роскоментировать
function calculate(strategy)
{
    this.strategy = strategy;
    this.exec = function (a, b)
    { this.strategy.exec(a, b); }
}
//функция выполнения програмы
function main()
{
    var c1 = prompt(c1),
        c2 = prompt(c2);
    var ch = prompt(ch);
    var d;
    switch (ch)
    {
        case "+":
            d = new plus();
            break;
        case "-":
            d = new minus();
            break;
        case "*":
            d = new multiplication();
            break;
        case "/":
            d = new division();
            break;
    }
    var show = new calculate(d);
    show.exec(c1, c2);
}
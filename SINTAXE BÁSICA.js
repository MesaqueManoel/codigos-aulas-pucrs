// SINTAXE BÁSICA
(param1, param2, ..., paramN) => { statements }
(param1, param2, ..., paramN) => expressio
// equivalente a: => { return expression; }

// Parênteses são opcionais quando só há um nome de parâmetro:
(singleParam) => { statements }
singleParam => { statements }

// A lista de parâmetros para uma função sem parâmetros
// DEVE ser escrita com um par de parênteses ou _.
() => { statements }
_ => { statements }
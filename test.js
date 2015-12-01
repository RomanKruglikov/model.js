/*for (var a = +prompt("number?", ""), c = a, b = --a; b > 0; b--) {
	c +=b;
}
alert(c)*/

/*function sumTo(n) {
	if (n != 1) {
		return n + sumTo(n - 1);
	} else {
		return n;
	}
}
alert(sumTo(100))*/

//>>>>>>>>>>>>>>>>>>>>>>>Факториал<<<<<<<<<<<<<<<<<<<<<<<<<<

/*for (var a = prompt("number", ""), c = a, b = --a; b > 0; b --) {
	c *= b;
}
alert(c)*/

/*function calcFactorial(n) {
	if (n != 1) {
		return n * calcFactorial(n - 1);
	} else {
		return n;
	}
}
alert(calcFactorial(5))*/

function fib(n) {
	if (n > 1) {return fib(n - 1) + fib(n - 2);
	} else {
		return n;
	}
}
alert( fib(8) )
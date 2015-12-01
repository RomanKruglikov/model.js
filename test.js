/*for (var a = +prompt("number?", ""), c = a, b = --a; b > 0; b--) {
	c +=b;
}
alert(c)*/
//______________________________________________________________
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
//_____________________________________________________________
/*function calcFactorial(n) {
	if (n != 1) {
		return n * calcFactorial(n - 1);
	} else {
		return n;
	}
}
alert(calcFactorial(5))*/
//>>>>>>>>>>>>>>>>>>>>ФИБОНАЧИ<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
/*function fib(n) {
	if (n > 1) {return fib(n - 1) + fib(n - 2);
	} else {
		return n;
	}
}
alert( fib(4) )*/
//___________________________________________________________

function fib(){
	var a = +prompt("?", "");
	if ( a > 3 ) {
	for (var b = 1, c = 2,d; a > 3; a--) {
	d = b + c;
	b = c, c = d;
}} else if (a === 3) {
	d = 2;
} else if (a === 1 || a === 2) {
	d = 1;
} else {
	d = "number incorrect";
}
alert("**_" + d  + "_**");
}

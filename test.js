	
function numbers() {
	var a = prompt('Введите первое число', ''), b = prompt('Введите второе число', ''), c = 0;
		
		if(a <= b) {
			for (; a <= b; a++) {
			if (a % 2 > 0) {
				c = +a + +c
			}
		
		}} else if (a => b) {
			for (; b <= a; b++) {
			if (b % 2 > 0) {
				c = +b + +c
			}
		
		}}
alert(c)
}

numbers()
	
function numbers() {
	
	var a,b,c;
	if(a = prompt('Введите первое число', '')==null){
		alert("Операция отменена");
		exit;
	}
	if(b = prompt('Введите второе число', '')==null){
		alert("Операция отменена");
 		exit;
 	}
		if(a <= b) {
			for (; a <= b; a++) {
			if (a % 2 > 0) {
				c += +a;
			}
		
		}} else if (a => b) {
			for (; b <= a; b++) {
			if (b % 2 > 0) {
				c += +b
			}
		
		}}
alert(c)
}
function func() {
	alert('Hello world');
}

numbers()
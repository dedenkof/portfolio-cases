'use strict';

let total = 0,
first = 0,
second = 0,
result = '';
const element = document.getElementById("result");

for (let i = 1; i <= 15; i++){
	
	first = Math.floor((Math.random() * 6) + 1);
	second = Math.floor((Math.random() * 6) + 1);
	
	
	result += "Первая кость: " + first + " | Вторая кость: " + second + "<br>";
	
	if(first == second){
		
		result += "Выпал дубль. Число: " + first + "<br>";
		
	}
				
	if ( (first < 3 && second > 4) || (first > 4 && second < 3) ) {

		result += "Большой разброс между костями. Разница составляет: " + Math.abs(second - first) + "<br>";
	
		}
		
		total += first + second;
		
			
	}

	result += (total >= 100) ? '<hr><strong>Победа, вы набрали:</strong> ' + total + ' очков' : '<hr><strong>Вы проиграли</strong>, у вас: ' + total + ' очков<br>';
	element.innerHTML = result;
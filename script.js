
	document.write('<h1></h1>');
	var backgrc = prompt('Choose between white and brown for bg color', '');
		switch (backgrc){
			case "white":
				document.bgColor='white';
				break;
				case "brown":
				document.bgColor='burlywood';
				break;
		}
var myArray = ['welcome','try again!'];
for (var x=1;x>0;x++){document.write(myArray[0]);}
var x=1000000;
while (x>0){
	document.write(myArray[0]);
	x++;
}




$(document).ready(function(){
	$('goToNext').click(function (){$('goToNext').click(function(){
				$('#kutija').animate({
					left: 0,
					height: '10px',
					width: '30px',
					opacity:'1'
		});});})});

const person ={
  firstName: "Ahmed",
  lastName: "Suleiman",
  age: 20,
  eyeColor: "brown"
};
document.getElementById("moveLeft").innerHTML =
person.firstName + " is " + person.age + " years old.";
				
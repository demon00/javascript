// events(события){
// 	onclick - выполняется функция по клику
// 	onfocus - в формах удаляется значение при клике на нее
// 	onblur - в формах добавляется обратно значени если ничего не написать
// 	setTimeout - выполняется футкция по времени
//  setInterval - выполняется футкция с определённым итервалом
// }


// DOM
var button = document.getElementById('button');

button.onclick = function clickButton() {
	var newDiv = document.createElement('div');
	var newText = document.createTextNode('this is text append in createTextNode');
	newDiv.appendChild(newText);
	var firstDiv = wrapper.getElementsByTagName('div')[0];
	wrapper.insertBefore(newDiv, firstDiv);
};

// end DOM

// Form
var formMy = document.getElementById('mail');
var phoneMy = document.getElementById('phone');
formMy.onfocus = function(){
	if( formMy.value == "there your email") {
		formMy.value = "";
	}
};

formMy.onblur = function(){
	if( formMy.value == "") {
		formMy.value = "there your email";
	}
};

phoneMy.onfocus = function(){
	if( phoneMy.value == "your telephone numbers") {
		phoneMy.value = "";
	}
};

phoneMy.onblur = function(){
	if( phoneMy.value == "") {
		phoneMy.value = "your telephone numbers";
	}
};


// Проверка формы перед отправкой на соответствие
function formPostEvent() {
	document.getElementById('form').onsubmit = function() {
		if (document.getElementById('mail').value != "demon@mail.ru" || document.getElementById('phone').value != "6065549") {
			document.getElementById('errorMessage').innerHTML = "Please provide your email adress!";
			document.getElementById('errorPhone').innerHTML = "Please provide your phone number!";
			return false;
		}else {
			document.getElementById('errorMessage').innerHTML = "";
			document.getElementById('errorPhone').innerHTML = "";
			return true;
		};
	};
};

function priparePage() {
	document.getElementById('brashow').onclick = function() {
		if (document.getElementById('brashow').checked) {
     document.getElementById('question').style.display = "block";
		} else {
			document.getElementById('question').style.display = "none";
		};
	};
  document.getElementById('question').style.display = "none";
};

window.onload = function () {
	formPostEvent();
	priparePage();
};

// end Form

// timeout
function bich(){
	console.log("welcom bich!")
};
function repeat(){
	console.log("what you want?")
};

// setTimeout(bich, 5000);
// setInterval(repeat, 5000);
//End timeout

// slider

var slider = document.getElementById('slider__image');

var imageArray = ["img/bigSur.jpg","img/cali_flag.jpg","img/bigSur.jpg","img/mission_look.jpg"];

var imageIndex = 0;

function sliderTimeout() {
	slider.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
};

var intervalImage = setInterval(sliderTimeout, 2000);

// кликая по сладеру он останавливается
slider.onclick = function() {
	clearInterval(intervalImage);
};
// end slider

// className
var gtCsSt = document.getElementById('getCssStyle');

gtCsSt.onclick = function() {
	document.getElementById('getSpan').style.fontSize = "2em";
	document.getElementById('getSpanTwo').style.color = "yellow";
	document.getElementById('getSpanThree').style.fontWeight = "bold";
}

// END className




// test

var nameTest = document.getElementById('nameTest');

var ageTest = document.getElementById('ageTest');

nameTest.onfocus = function(){
	if( nameTest.value == "Your name") {
		nameTest.value = "";
	}
};

nameTest.onblur = function(){
	if( nameTest.value == "") {
		nameTest.value = "Your name";
	}
};

ageTest.onfocus = function(){
	if( ageTest.value == "Your age") {
		ageTest.value = "";
	}
};

ageTest.onblur = function(){
	if( ageTest.value == "") {
		ageTest.value = "Your age";
	}
};

var submitTest = document.getElementById('submitTest');
var resultTest = document.getElementById('resultTest');

var maleTest = document.getElementById('male');
var maleBoy = document.getElementById('maleBoy').value;
var maleGirl = document.getElementById('maleGirl');
var maleCheked = document.getElementById("chekedMale");


window.onload = function() {

if (submitTest.onclick) {}
submitTest.onclick = function clickTests(resultName, resultName) {
	function resultName() {
 if (nameTest.value == "Your name") {
 	  document.getElementById('nameResult').innerHTML = "Please provide your name!";
 	  return false;
 } else {
    document.getElementById('nameResult').innerHTML = "";
 };
 function resultName() {
   if (ageTest.value == "Your age") {
   	document.getElementById('ageResult').innerHTML = "Please provide your age!";
   	return false;
   } else {
    document.getElementById('ageResult').innerHTML = "";
   };
  };
 };
};

};


// submitTest.onclick = function() {
// 	console.log(nameTest.value)
// 	// console.log(maleGirl.value);
// };

// end test

// RegEx Регулярные выражения
var EgReg = /^lol/;

var myString = "I am DC and i smile for your stupid, lol";

if (EgReg.test('lol')){
  console.log('yept lol have');
} else {
  console.log('Fuck you! dotn\'t have lol');
}
// END RegEx Регулярные выражения


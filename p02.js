//Author: Jasmin Mousavi; Project 2: Intelligence Test
var ans1a, ans1b, ans1c;
var ans2a, ans2b, ans2c;
var ans3a, ans3b, ans3c;
var isCorrect1a, isCorrect1b, isCorrect1c = 0;
var isCorrect2a, isCorrect2b, isCorrect2c = 0;
var isCorrect3a, isCorrect3b, isCorrect3c = 0;
function validate1a(){
	var answer1a = document.getElementById("input1").value;
	answer1a = answer1a.replace(/ /g,'');
	setCookie("test_oneA_correct", 0);
	if(answer1a != ans1a){
		document.getElementById("input1").className = document.getElementById("input1").className.replace(" sucess", ""); // this removes the error class
		if(isNaN(answer1a)){
			document.getElementById("error").innerHTML="Input must be a number!";
			document.getElementById("error").classList.remove("hidden-message");
			document.getElementById("input1").className = document.getElementById("input1").className + " error";
		}
		else{
			document.getElementById("error").innerHTML="Try Again!";
			document.getElementById("error").classList.remove("hidden-message");
			document.getElementById("input1").className = document.getElementById("input1").className + " error";  // this adds the error class
		}
	}
	else{
		document.getElementById("input1").className = document.getElementById("input1").className.replace(" error", ""); // this removes the error class
		document.getElementById("error").innerHTML="Correct!";
		document.getElementById("error").classList.remove("hidden-message");
		document.getElementById("input1").className = document.getElementById("input1").className + " sucess";  // this adds the error class
		setCookie("test_oneA_correct", 1);
	}

}
function validate1b(){
	var answer1b = document.getElementById("input2").value;
	answer1b = answer1b.replace(/ /g,'');

	setCookie("test_oneB_correct", 0);
	if(answer1b != ans1b){
		document.getElementById("input2").className = document.getElementById("input2").className.replace(" sucess", ""); // this removes the error class

		if(isNaN(answer1b)){
			document.getElementById("error2").innerHTML="Input must be a number!";
			document.getElementById("error2").classList.remove("hidden-message");
			document.getElementById("input2").className = document.getElementById("input2").className + " error";
		}
		else{
			document.getElementById("error2").innerHTML="Try Again!";
			document.getElementById("error2").classList.remove("hidden-message");
			document.getElementById("input2").className = document.getElementById("input2").className + " error";  // this adds the error class
		}
	}
	else{
		document.getElementById("input2").className = document.getElementById("input2").className.replace(" error", ""); // this removes the error class
		document.getElementById("error2").innerHTML="Correct!";
		document.getElementById("error2").classList.remove("hidden-message");
		document.getElementById("input2").className = document.getElementById("input2").className + " sucess";  // this adds the error class

		setCookie("test_oneB_correct", 1);
	}


}
function validate1c(){
	var answer1c = document.getElementById("input3").value;
	answer1c = answer1c.replace(/ /g,'');

	setCookie("test_oneC_correct", 0);
	if(answer1c != ans1c){
		document.getElementById("input3").className = document.getElementById("input3").className.replace(" sucess", ""); // this removes the error class

		if(isNaN(answer1c)){
			document.getElementById("error3").innerHTML="Input must be a number!";
			document.getElementById("error3").classList.remove("hidden-message");
			document.getElementById("input3").className = document.getElementById("input3").className + " error";
		}
		else{
			document.getElementById("error3").innerHTML="Try Again!";
			document.getElementById("error3").classList.remove("hidden-message");
			document.getElementById("input3").className = document.getElementById("input3").className + " error";  // this adds the error class
		}
	}
	else{
		document.getElementById("input3").className = document.getElementById("input3").className.replace(" error", ""); // this removes the error class
		document.getElementById("error3").innerHTML="Correct!";
		document.getElementById("error3").classList.remove("hidden-message");
		document.getElementById("input3").className = document.getElementById("input3").className + " sucess";  // this adds the error class

		setCookie("test_oneC_correct", 1);
	}


}
function validate2a(){
	var answer2a = document.getElementById("input1").value;
	answer2a = answer2a.replace(/ /g,'');

	setCookie("test_twoA_correct", 0);
	if(answer2a != ans2a){
		document.getElementById("input1").className = document.getElementById("input1").className.replace(" sucess", ""); // this removes the error class

		if(isNaN(answer2a)){
			document.getElementById("error").innerHTML="Input must be a number!";
			document.getElementById("error").classList.remove("hidden-message");
			document.getElementById("input1").className = document.getElementById("input1").className + " error";
		}
		else{
			document.getElementById("error").innerHTML="Try Again!";
			document.getElementById("error").classList.remove("hidden-message");
			document.getElementById("input1").className = document.getElementById("input1").className + " error";  // this adds the error class
		}
	}
	else{
		document.getElementById("input1").className = document.getElementById("input1").className.replace(" error", ""); // this removes the error class
		document.getElementById("error").innerHTML="Correct!";
		document.getElementById("error").classList.remove("hidden-message");
		document.getElementById("input1").className = document.getElementById("input1").className + " sucess";  // this adds the error class

		setCookie("test_twoA_correct", 1);
	}



}
function validate2b(){
	var answer2b = document.getElementById("input2").value;
	answer2b = answer2b.replace(/ /g,'');
	setCookie("test_twoB_correct", 0);
	if(answer2b != ans2b){
		document.getElementById("input2").className = document.getElementById("input2").className.replace(" sucess", ""); // this removes the error class
		if(isNaN(answer2b)){
			document.getElementById("error2").innerHTML="Input must be a number!";
			document.getElementById("error2").classList.remove("hidden-message");
			document.getElementById("input2").className = document.getElementById("input2").className + " error";
		}
		else{
			document.getElementById("error2").innerHTML="Try Again!";
			document.getElementById("error2").classList.remove("hidden-message");
			document.getElementById("input2").className = document.getElementById("input2").className + " error";  // this adds the error class
		}
	}
	else{
		document.getElementById("input2").className = document.getElementById("input2").className.replace(" error", ""); // this removes the error class
		document.getElementById("error2").innerHTML="Correct!";
		document.getElementById("error2").classList.remove("hidden-message");
		document.getElementById("input2").className = document.getElementById("input2").className + " sucess";  // this adds the error class

		setCookie("test_twoB_correct", 1);
	}

}
function validate2c(){
	var answer2c = document.getElementById("input3").value;
	answer2c = answer2c.replace(/ /g,'');

	setCookie("test_twoC_correct", 0);
	if(answer2c != ans2c){
		document.getElementById("input3").className = document.getElementById("input3").className.replace(" sucess", ""); // this removes the error class

		if(isNaN(answer2c)){
			document.getElementById("error3").innerHTML="Input must be a number!";
			document.getElementById("error3").classList.remove("hidden-message");
			document.getElementById("input3").className = document.getElementById("input3").className + " error";
		}
		else{
			document.getElementById("error3").innerHTML="Try Again!";
			document.getElementById("error3").classList.remove("hidden-message");
			document.getElementById("input3").className = document.getElementById("input3").className + " error";  // this adds the error class
		}
	}
	else{
		document.getElementById("input3").className = document.getElementById("input3").className.replace(" error", ""); // this removes the error class
		document.getElementById("error3").innerHTML="Correct!";
		document.getElementById("error3").classList.remove("hidden-message");
		document.getElementById("input3").className = document.getElementById("input3").className + " sucess";  // this adds the error class

		setCookie("test_twoC_correct", 1);
	}


}

function validate3a(){
	var answer3a = document.getElementById("input1").value;
	answer3a = answer3a.replace(/ /g,'');

	setCookie("test_threeA_correct", 0);
	if(answer3a != ans3a){
		document.getElementById("input1").className = document.getElementById("input1").className.replace(" sucess", ""); // this removes the error class

		if(isNaN(answer3a)){
			document.getElementById("error").innerHTML="Input must be a number!";
			document.getElementById("error").classList.remove("hidden-message");
			document.getElementById("input1").className = document.getElementById("input1").className + " error";
		}
		else{
			document.getElementById("error").innerHTML="Try Again!";
			document.getElementById("error").classList.remove("hidden-message");
			document.getElementById("input1").className = document.getElementById("input1").className + " error";  // this adds the error class
		}
	}
	else{
		document.getElementById("input1").className = document.getElementById("input1").className.replace(" error", ""); // this removes the error class
		document.getElementById("error").innerHTML="Correct!";
		document.getElementById("error").classList.remove("hidden-message");
		document.getElementById("input1").className = document.getElementById("input1").className + " sucess";  // this adds the error class

		setCookie("test_threeA_correct", 1);
	}

}
function validate3b(){
	var answer3b = document.getElementById("input2").value;
	answer3b = answer3b.replace(/ /g,'');
	setCookie("test_threeB_correct", 0);

	if(answer3b != ans3b){
		document.getElementById("input2").className = document.getElementById("input2").className.replace(" sucess", ""); // this removes the error class

		if(isNaN(answer3b)){
			document.getElementById("error2").innerHTML="Input must be a number!";
			document.getElementById("error2").classList.remove("hidden-message");
			document.getElementById("input2").className = document.getElementById("input2").className + " error";
		}
		else{
			document.getElementById("error2").innerHTML="Try Again!";
			document.getElementById("error2").classList.remove("hidden-message");
			document.getElementById("input2").className = document.getElementById("input2").className + " error";  // this adds the error class
		}
	}
	else{
		document.getElementById("input2").className = document.getElementById("input2").className.replace(" error", ""); // this removes the error class
		document.getElementById("error2").innerHTML="Correct!";
		document.getElementById("error2").classList.remove("hidden-message");
		document.getElementById("input2").className = document.getElementById("input2").className + " sucess";  // this adds the error class

		setCookie("test_threeB_correct", 1);
	}


}
function validate3c(){
	var answer3c = document.getElementById("input3").value;
	answer3c = answer3c.replace(/ /g,'');

	setCookie("test_threeC_correct", 0);
	if(answer3c != ans3c){
		document.getElementById("input3").className = document.getElementById("input3").className.replace(" sucess", ""); // this removes the error class

		if(isNaN(answer3c)){
			document.getElementById("error3").innerHTML="Input must be a number!";
			document.getElementById("error3").classList.remove("hidden-message");
			document.getElementById("input3").className = document.getElementById("input3").className + " error";
		}
		else{
			document.getElementById("error3").innerHTML="Try Again!";
			document.getElementById("error3").classList.remove("hidden-message");
			document.getElementById("input3").className = document.getElementById("input3").className + " error";  // this adds the error class
		}
	}
	else{
		document.getElementById("input3").className = document.getElementById("input3").className.replace(" error", ""); // this removes the error class
		document.getElementById("error3").innerHTML="Correct!";
		document.getElementById("error3").classList.remove("hidden-message");
		document.getElementById("input3").className = document.getElementById("input3").className + " sucess";  // this adds the error class

		setCookie("test_threeC_correct", 1);
	}


}

function display1(){
	var display = "";
	var a, b, c, d, e, f, g, x, y, z = "";
	x = Math.floor((Math.random() * 10) + 1);
	y = Math.floor((Math.random() * 10) + 1);
	z = Math.floor((Math.random() * 10) + 1);

	a = Math.floor((Math.random() * 10) + 1);
	b = Math.floor((Math.random() * 10) + 1);
	c = Math.floor((Math.random() * 10) + 1);

	d = Math.floor((Math.random() * 10) + 1);
	e = Math.floor((Math.random() * 10) + 1);
	f = Math.floor((Math.random() * 10) + 1);
	for(i = 0; i < 5; i++){
		display += x + " + "+y + " + "+z + " = " + x+(x*y)+(y+z)+z+ "<br>";
		x = Math.floor((Math.random() * 10) + 1);
		y = Math.floor((Math.random() * 10) + 1);
		z = Math.floor((Math.random() * 10) + 1);
	}
	document.getElementById("demo").innerHTML = display;
	document.getElementById("cousinIt").innerHTML = x + " + "+y + " + "+z + " = ";
	document.getElementById("cousin").innerHTML = a + " + "+b + " + "+c + " = ";
	document.getElementById("it").innerHTML = d + " + "+e + " + "+f + " = ";
	ans1a = x + " " + (x*y) + " " + (y+z) + " " + z;
	ans1a = ans1a.replace(/ /g,'');
	ans1b = x + " " + (a*b) + " " + (b+c) + " " + c;
	ans1b = ans1b.replace(/ /g,'');
	ans1c = x + " " + (d*e) + " " + (e+f) + " " + f;
	ans1c = ans1c.replace(/ /g,'');
}
function display2(){
	var display = "";
	var a, b, c, d, e, f, g, x, y, z = "";
	x = Math.floor((Math.random() * 10) + 1);
	y = Math.floor((Math.random() * 10) + 1);
	z = Math.floor((Math.random() * 10) + 1);

	a = Math.floor((Math.random() * 10) + 1);
	b = Math.floor((Math.random() * 10) + 1);
	c = Math.floor((Math.random() * 10) + 1);

	d = Math.floor((Math.random() * 10) + 1);
	e = Math.floor((Math.random() * 10) + 1);
	f = Math.floor((Math.random() * 10) + 1);
	for(i = 0; i < 5; i++){
		display += x + " + "+y + " + "+z + " = " + y+(y*z)+(x+z)+z+ "<br>";
		x = Math.floor((Math.random() * 10) + 1);
		y = Math.floor((Math.random() * 10) + 1);
		z = Math.floor((Math.random() * 10) + 1);
	}
	document.getElementById("demo").innerHTML = display;
	document.getElementById("cousinIt").innerHTML = x + " + "+y + " + "+z + " = ";
	document.getElementById("cousin").innerHTML = a + " + "+b + " + "+c + " = ";
	document.getElementById("it").innerHTML = d + " + "+e + " + "+f + " = ";
	ans2a = y + " " + (y*z) + " " + (x+z) + " " + z;
	ans2a = ans2a.replace(/ /g,'');
	ans2b = y + " " + (b*c) + " " + (a+c) + " " + c;
	ans2b = ans2b.replace(/ /g,'');
	ans2c = y + " " + (e*f) + " " + (d+f) + " " + f;
	ans2c = ans2c.replace(/ /g,'');
}
function display3(){
	var display = "";
	var a, b, c, d, e, f, g, x, y, z = "";
	x = Math.floor((Math.random() * 10) + 1);
	y = Math.floor((Math.random() * 10) + 1);
	z = Math.floor((Math.random() * 10) + 1);

	a = Math.floor((Math.random() * 10) + 1);
	b = Math.floor((Math.random() * 10) + 1);
	c = Math.floor((Math.random() * 10) + 1);

	d = Math.floor((Math.random() * 10) + 1);
	e = Math.floor((Math.random() * 10) + 1);
	f = Math.floor((Math.random() * 10) + 1);
	for(i = 0; i < 5; i++){
		display += x + " + "+y + " + "+z + " = " + z+(x*z)+(y+x)+y+ "<br>";
		x = Math.floor((Math.random() * 10) + 1);
		y = Math.floor((Math.random() * 10) + 1);
		z = Math.floor((Math.random() * 10) + 1);
	}
	document.getElementById("demo").innerHTML =  display;
	document.getElementById("cousinIt").innerHTML = x + " + "+y + " + "+z + " = ";
	document.getElementById("cousin").innerHTML = a + " + "+b + " + "+c + " = ";
	document.getElementById("it").innerHTML = d + " + "+e + " + "+f + " = ";
	ans3a = z + " " + (x*z) + " " + (y+x) + " " + y;
	ans3a = ans3a.replace(/ /g,'');
	ans3b = a + " " + (a*c) + " " + (b+a) + " " + b;
	ans3b = ans3b.replace(/ /g,'');
	ans3c = z + " " + (d*f) + " " + (e+d) + " " + e;
	ans3c = ans3c.replace(/ /g,'');
}
function statistics(){

	var correct1a = Number(getCookie("test_oneA_correct"));
	var correct1b = Number(getCookie("test_oneB_correct"));
	var correct1c = Number(getCookie("test_oneC_correct"));
	var correct2a = Number(getCookie("test_twoA_correct"));
	var correct2b = Number(getCookie("test_twoB_correct"));
	var correct2c = Number(getCookie("test_twoC_correct"));
	var correct3a = Number(getCookie("test_threeA_correct"));
	var correct3b = Number(getCookie("test_threeB_correct"));
	var correct3c = Number(getCookie("test_threeC_correct"));

	var correct1 = Number(correct1a+correct1b+correct1c);
	var correct2 = Number(correct2a+correct2b+correct2c);
	var correct3 = Number(correct3a+correct3b+correct3c);

	var display1, display2, display3= "";
	if(correct1==3){
		display1 = "You scored 3/3 on Test One.";
	}
	else if(correct1==2){
		display1 = "You scored 2/3 on Test One.";;
	}
	else if(correct1==1){
		display1 = "You scored 1/3 on Test One.";;
	}
	else if(correct1==0){
		display1 = "You scored 0/3 on Test One.";;
	}


	if(correct2==3){
		display2 = "You scored 3/3 on Test Two.";
	}
	else if(correct2==2){
		display2 = "You scored 2/3 on Test Two.";
	}
	else if(correct2==1){
		display2 = "You scored 1/3 on Test Two.";
	}
	else if(correct2==0){
		display2 = "You scored 0/3 on Test Two.";
	}


	if(correct3==3){
		display3 = "You scored 3/3 on Test Three.";
	}
	else if(correct3==2){
		display3 = "You scored 2/3 on Test Three.";
	}
	else if(correct2==1){
		display3 = "You scored 1/3 on Test Three.";
	}
	else if(correct2==0){
		display3 = "You scored 0/3 on Test Three.";
	}

	document.getElementById("test1").innerHTML= "<br>" + display1 + "<br><br>";
	document.getElementById("test2").innerHTML= display2 + "<br><br>";
	document.getElementById("test3").innerHTML= display3 + "<br><br>";

}
//author: w3schools; found at: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length,c.length);
		}
	}
	return "";
}

//gradiant background
//author: Mario Klingemann; from: https://codepen.io/quasimondo/pen/lDdrF
var colors = new Array(
		[62,35,255],
		[60,255,60],
		[255,35,98],
		[45,175,230],
		[255,0,255],
		[255,128,0]);

var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
	if ( $===undefined ) return;

	var c0_0 = colors[colorIndices[0]];
	var c0_1 = colors[colorIndices[1]];
	var c1_0 = colors[colorIndices[2]];
	var c1_1 = colors[colorIndices[3]];

	var istep = 1 - step;
	var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
	var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
	var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
	var color1 = "rgb("+r1+","+g1+","+b1+")";

	var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
	var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
	var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
	var color2 = "rgb("+r2+","+g2+","+b2+")";

	$('#gradient').css({
		background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
		background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

	step += gradientSpeed;
	if ( step >= 1 )
	{
		step %= 1;
		colorIndices[0] = colorIndices[1];
		colorIndices[2] = colorIndices[3];

		//pick two new target color indices
		//do not pick the same as the current one
		colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
		colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

	}
}

setInterval(updateGradient,10);

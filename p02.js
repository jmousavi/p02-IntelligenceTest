var ans1a, ans1b, ans1c;
var ans2a, ans2b, ans2c;
var ans3a, ans3b, ans3c;
var counter1a, counter1b, counter1c = 0;
var counter2a, counter2b, counter2c = 0;
var counter3a, counter3b, counter3c = 0;
var isCorrect1a, isCorrect1b, isCorrect1c = 0;
var isCorrect2a, isCorrect2b, isCorrect2c = 0;
var isCorrect3a, isCorrect3b, isCorrect3c = 0;
function validate1a(){
  var answer1a = document.getElementById("input1").value;
  answer1a = answer1a.replace(/ /g,'');
  if(answer1a != ans1a){
    document.getElementById("input1").className = document.getElementById("input1").className.replace(" sucess", ""); // this removes the error class
    counter1a++;
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

  setCookie("test_oneA_tries", counter1a);
}
function validate1b(){
  var answer1b = document.getElementById("input2").value;
  answer1b = answer1b.replace(/ /g,'');
  if(answer2 != ans1b){
    document.getElementById("input2").className = document.getElementById("input2").className.replace(" sucess", ""); // this removes the error class
    counter1b++;
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
  document.getElementById("input2").className = document.getElementById("input1").className.replace(" error", ""); // this removes the error class
  document.getElementById("error2").innerHTML="Correct!";
  document.getElementById("error2").classList.remove("hidden-message");
  document.getElementById("input2").className = document.getElementById("input1").className + " sucess";  // this adds the error class
setCookie("test_oneB_correct", 1);
}

  setCookie("test_oneB_tries", counter1b);
}
function validate1c(){
  var answer1c = document.getElementById("input3").value;
  answer1c = answer3.replace(/ /g,'');
  if(answer1c != ans1c){
    document.getElementById("input3").className = document.getElementById("input3").className.replace(" sucess", ""); // this removes the error class
    counter1c++;
    if(isNaN(answer1c)){
      document.getElementById("error3").innerHTML="Input must be a number!";
      document.getElementById("error3").classList.remove("hidden-message");
      document.getElementById("input3").className = document.getElementById("input3").className + " error";
    }
    else{
    document.getElementById("error3").innerHTML="Try Again!";
    document.getElementById("error3").classList.remove("hidden-message");
    document.getElementById("input3").className = document.getElementById("input1").className + " error";  // this adds the error class
  }
}
else{
  document.getElementById("input3").className = document.getElementById("input3").className.replace(" error", ""); // this removes the error class
  document.getElementById("error3").innerHTML="Correct!";
  document.getElementById("error3").classList.remove("hidden-message");
  document.getElementById("input3").className = document.getElementById("input3").className + " sucess";  // this adds the error class
setCookie("test_oneC_correct", 1);
}

  setCookie("test_oneC_tries", counter1c);
}
function validate2a(){
  var answer2a = document.getElementById("input1").value;
  answer2a = answer2a.replace(/ /g,'');
  if(answer2a != ans2a){
    document.getElementById("input1").className = document.getElementById("input1").className.replace(" sucess", ""); // this removes the error class
    counter2a++;
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

  setCookie("test_twoA_tries", counter2a);
}
function validate2b(){
  var answer2b = document.getElementById("input2").value;
  answer2b = answer2b.replace(/ /g,'');
  if(answer2b != ans2b){
    document.getElementById("input2").className = document.getElementById("input2").className.replace(" sucess", ""); // this removes the error class
    counter2b++;
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
  document.getElementById("input2").className = document.getElementById("input1").className.replace(" error", ""); // this removes the error class
  document.getElementById("error2").innerHTML="Correct!";
  document.getElementById("error2").classList.remove("hidden-message");
  document.getElementById("input2").className = document.getElementById("input1").className + " sucess";  // this adds the error class
setCookie("test_twoB_correct", 1);
}

  setCookie("test_twoB_tries", counter2b);
}
function validate2c(){
  var answer2c = document.getElementById("input3").value;
  answer2c = answer2c.replace(/ /g,'');
  if(answer2c != ans2c){
    document.getElementById("input3").className = document.getElementById("input3").className.replace(" sucess", ""); // this removes the error class
    counter2c++;
    if(isNaN(answer2c)){
      document.getElementById("error3").innerHTML="Input must be a number!";
      document.getElementById("error3").classList.remove("hidden-message");
      document.getElementById("input3").className = document.getElementById("input3").className + " error";
    }
    else{
    document.getElementById("error3").innerHTML="Try Again!";
    document.getElementById("error3").classList.remove("hidden-message");
    document.getElementById("input3").className = document.getElementById("input1").className + " error";  // this adds the error class
  }
}
else{
  document.getElementById("input3").className = document.getElementById("input3").className.replace(" error", ""); // this removes the error class
  document.getElementById("error3").innerHTML="Correct!";
  document.getElementById("error3").classList.remove("hidden-message");
  document.getElementById("input3").className = document.getElementById("input3").className + " sucess";  // this adds the error class
  setCookie("test_twoC_correct", 1);
}

  setCookie("test_twoC_tries", counter2c);
}

function validate3a(){
  var answer3a = document.getElementById("input1").value;
  answer3a = answer3a.replace(/ /g,'');
  if(answer3a != ans3a){
    document.getElementById("input1").className = document.getElementById("input1").className.replace(" sucess", ""); // this removes the error class
    counter3a++;
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

  setCookie("test_threA_tries", counter3a);
}
function validate3b(){
  var answer3b = document.getElementById("input2").value;
  answer3b = answer3b.replace(/ /g,'');
  if(answer3b != ans3b){
    document.getElementById("input2").className = document.getElementById("input2").className.replace(" sucess", ""); // this removes the error class
    counter3b++;
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
  document.getElementById("input2").className = document.getElementById("input1").className.replace(" error", ""); // this removes the error class
  document.getElementById("error2").innerHTML="Correct!";
  document.getElementById("error2").classList.remove("hidden-message");
  document.getElementById("input2").className = document.getElementById("input1").className + " sucess";  // this adds the error class
  setCookie("test_threeB_correct", 1);
}

  setCookie("test_threeB_tries", counter3b);
}
function validate3c(){
  var answer3c = document.getElementById("input3").value;
  answer3c = answer3c.replace(/ /g,'');
  if(answer3c != ans3c){
    document.getElementById("input3").className = document.getElementById("input3").className.replace(" sucess", ""); // this removes the error class
    counter3c++;
    if(isNaN(answer3c)){
      document.getElementById("error3").innerHTML="Input must be a number!";
      document.getElementById("error3").classList.remove("hidden-message");
      document.getElementById("input3").className = document.getElementById("input3").className + " error";
    }
    else{
    document.getElementById("error3").innerHTML="Try Again!";
    document.getElementById("error3").classList.remove("hidden-message");
    document.getElementById("input3").className = document.getElementById("input1").className + " error";  // this adds the error class
  }
}
else{
  document.getElementById("input3").className = document.getElementById("input3").className.replace(" error", ""); // this removes the error class
  document.getElementById("error3").innerHTML="Correct!";
  document.getElementById("error3").classList.remove("hidden-message");
  document.getElementById("input3").className = document.getElementById("input3").className + " sucess";  // this adds the error class
  setCookie("test_threeC_correct", 1)
}

  setCookie("test_threeC_tries", counter3c);
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
  console.log(ans1a);
  console.log(ans1b);
  console.log(ans1c);
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
  console.log(ans2a);
  console.log(ans2b);
  console.log(ans2c);
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
  console.log(ans3a);
  console.log(ans3b);
  console.log(ans3c);
}
function statistics(){
  var tries1a = getCookie("test_oneA_tries");
  var tries1b = getCookie("test_oneB_tries");
  var tries1c = getCookie("test_oneC_tries");
  var tries2a = getCookie("test_twoA_tries");
  var tries2b = getCookie("test_twoB_tries");
  var tries2c = getCookie("test_twoC_tries");
  var tries3a = getCookie("test_threeA_tries");
  var tries3b = getCookie("test_threeB_tries");
  var tries3c = getCookie("test_threeC_tries");

  var correct1a = getCookie("test_oneA_correct");
  var correct1b = getCookie("test_oneB_correct");
  var correct1c = getCookie("test_oneB_correct");
  var correct2a = getCookie("test_twoA_correct");
  var correct2b = getCookie("test_twoB_correct");
  var correct2c = getCookie("test_twoC_correct");
  var correct3a = getCookie("test_threeA_correct");
  var correct3b = getCookie("test_threeB_correct");
  var correct3c = getCookie("test_threeC_correct");



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

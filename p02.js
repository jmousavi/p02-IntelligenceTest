var ans1;
var ans2;
var ans3;
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
function validate1(){
  var answer = document.getElementById("input").value;
  answer = answer.replace(/ /g,'');
  if(answer != ans1){
    document.getElementById("input").className = document.getElementById("input").className.replace(" sucess", ""); // this removes the error class
    counter1++;
    if(isNaN(answer)){
      document.getElementById("error").innerHTML="Input must be a number!";
      document.getElementById("error").classList.remove("hidden-message");
      document.getElementById("input").className = document.getElementById("input").className + " error";
    }
    else{
    document.getElementById("error").innerHTML="Try Again!";
    document.getElementById("error").classList.remove("hidden-message");
    document.getElementById("input").className = document.getElementById("input").className + " error";  // this adds the error class
  }
  }
  else{
    document.getElementById("input").className = document.getElementById("input").className.replace(" error", ""); // this removes the error class
    document.getElementById("error").innerHTML="Correct!";
    document.getElementById("error").classList.remove("hidden-message");
    document.getElementById("input").className = document.getElementById("input").className + " sucess";  // this adds the error class
  }
  setCookie("test_one_tries", counter1);
}

function validate2(){
  var answer = document.getElementById("input").value;
  answer = answer.replace(/ /g,'');
  if(answer != ans2){
    document.getElementById("input").className = document.getElementById("input").className.replace(" sucess", ""); // this removes the error class
    counter2++;
    if(isNaN(answer)){
      document.getElementById("error").innerHTML="Input must be a number!";
      document.getElementById("error").classList.remove("hidden-message");
      document.getElementById("input").className = document.getElementById("input").className + " error";
    }
    else{
    document.getElementById("error").innerHTML="Try Again!";
    document.getElementById("error").classList.remove("hidden-message");
    document.getElementById("input").className = document.getElementById("input").className + " error";  // this adds the error class
  }
  }
  else{
    document.getElementById("input").className = document.getElementById("input").className.replace(" error", ""); // this removes the error class
    document.getElementById("error").innerHTML="Correct!";
    document.getElementById("error").classList.remove("hidden-message");
    document.getElementById("input").className = document.getElementById("input").className + " sucess";  // this adds the error class
  }
  setCookie("test_two_tries", counter2);
}
function validate3(){
  var answer = document.getElementById("input").value;
  answer = answer.replace(/ /g,'');
  if(answer != ans3){
    document.getElementById("input").className = document.getElementById("input").className.replace(" sucess", ""); // this removes the error class
    counter3++;
    if(isNaN(answer)){
      document.getElementById("error").innerHTML="Input must be a number!";
      document.getElementById("error").classList.remove("hidden-message");
      document.getElementById("input").className = document.getElementById("input").className + " error";
    }
    else{
    document.getElementById("error").innerHTML="Try Again!";
    document.getElementById("error").classList.remove("hidden-message");
    document.getElementById("input").className = document.getElementById("input").className + " error";  // this adds the error class
  }
  }
  else{
    document.getElementById("input").className = document.getElementById("input").className.replace(" error", ""); // this removes the error class
    document.getElementById("error").innerHTML="Correct!";
    document.getElementById("error").classList.remove("hidden-message");
    document.getElementById("input").className = document.getElementById("input").className + " sucess";  // this adds the error class
  }
  setCookie("test_three_tries", counter3);
}
function display1(){
  var display = "";
  var x = "";
  var y = "";
  var z = "";
  x = Math.floor((Math.random() * 10) + 1);
  y = Math.floor((Math.random() * 10) + 1);
  z = Math.floor((Math.random() * 10) + 1);
  for(i = 0; i < 5; i++){
    display += x + " + "+y + " + "+z + " = " + x+(x*y)+(y+z)+z+ "<br>";
    x = Math.floor((Math.random() * 10) + 1);
    y = Math.floor((Math.random() * 10) + 1);
    z = Math.floor((Math.random() * 10) + 1);
  }
  document.getElementById("demo").innerHTML = display;
  document.getElementById("cousinIt").innerHTML = x + " + "+y + " + "+z + " = ";
  ans1 = x + " " + (x*y) + " " + (y+z) + " " + z;
  ans1 = ans1.replace(/ /g,'');
  console.log(ans1)
}
function display2(){
  var display = "";
  var x = "";
  var y = "";
  var z = "";
  x = Math.floor((Math.random() * 10) + 1);
  y = Math.floor((Math.random() * 10) + 1);
  z = Math.floor((Math.random() * 10) + 1);
  for(i = 0; i < 5; i++){
    display += x + " + "+y + " + "+z + " = " + y+(y*z)+(x+z)+z+ "<br>";
    x = Math.floor((Math.random() * 10) + 1);
    y = Math.floor((Math.random() * 10) + 1);
    z = Math.floor((Math.random() * 10) + 1);
  }
  document.getElementById("demo").innerHTML = display;
  document.getElementById("cousinIt").innerHTML = x + " + "+y + " + "+z + " = ";
  ans2 = y + " " + (y*z) + " " + (x+z) + " " + z;
  ans2 = ans2.replace(/ /g,'');
  console.log(ans2)
}
function display3(){
  var display = "";
  var x = "";
  var y = "";
  var z = "";
  x = Math.floor((Math.random() * 10) + 1);
  y = Math.floor((Math.random() * 10) + 1);
  z = Math.floor((Math.random() * 10) + 1);
  for(i = 0; i < 5; i++){
    display += x + " + "+y + " + "+z + " = " + z+(x*z)+(y+x)+y+ "<br>";
    x = Math.floor((Math.random() * 10) + 1);
    y = Math.floor((Math.random() * 10) + 1);
    z = Math.floor((Math.random() * 10) + 1);
  }
  document.getElementById("demo").innerHTML = display;
  document.getElementById("cousinIt").innerHTML = x + " + "+y + " + "+z + " = ";
  ans3 = z + " " + (x*z) + " " + (y+x) + " " + y;
  ans3 = ans3.replace(/ /g,'');
  console.log(ans3)
}
function statistics(){
  document.getElementById("stats").innerHTML= "It took you " + getCooke("test_one_tries")
  + " tries on Test One <br>" +"It took you " + getCooke("test_two_tries")
  + " tries on Test Two <br>" +"It took you " + getCooke("test_three_tries")
  + " tries on Test Three <br>"
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

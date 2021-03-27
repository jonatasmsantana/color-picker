window.onload = function callAllFunctions(){
  paintColorSampleRgba();
  paintColorSampleRgb();
  paintColorSampleHsla();
  paintColorSampleHsl();
  paintColorSampleHexadecimal();
}

function paintColorSampleRgba(){
  var redValueRgba = document.getElementById("rgbaRedBar").value;
  var greenValueRgba = document.getElementById("rgbaGreenBar").value;
  var blueValueRgba = document.getElementById("rgbaBlueBar").value;
  var alphaValueRgba = document.getElementById("rgbaAlphaBar").value;

  document.getElementById("rgbaRedBar").title = redValueRgba;
  document.getElementById("rgbaGreenBar").title = greenValueRgba;
  document.getElementById("rgbaBlueBar").title = blueValueRgba;
  document.getElementById("rgbaAlphaBar").title = alphaValueRgba;

  var colorSample = document.getElementById("colorSample");
  colorSample.style.backgroundColor = "rgba(" +redValueRgba+ "," +greenValueRgba+ 
  "," + blueValueRgba+  "," +alphaValueRgba+ ")";
  
  var rgbaCode = document.getElementById("rgbaCode");
  rgbaCode.innerText = "rgba(" +redValueRgba+ ", " +greenValueRgba+ ", " + blueValueRgba+
  ", " +alphaValueRgba+ ")";
}

function paintColorSampleRgb(){
  var redValueRgb = document.getElementById("rgbRedBar").value;
  var greenValueRgb = document.getElementById("rgbGreenBar").value;
  var blueValueRgb = document.getElementById("rgbBlueBar").value;  

  document.getElementById("rgbRedBar").title = redValueRgb;
  document.getElementById("rgbGreenBar").title = greenValueRgb;
  document.getElementById("rgbBlueBar").title = blueValueRgb;
  
  var colorSampleRgb = document.getElementById("rgbColorSample");
  colorSampleRgb.style.backgroundColor = "rgb(" +redValueRgb+ "," +greenValueRgb+ "," +
   blueValueRgb+")";
   
  var rgbCode = document.getElementById("rgbCode");
  rgbCode.innerText = "rgb(" +redValueRgb+ ", " +greenValueRgb+ ", " + blueValueRgb+ ")";
}

function paintColorSampleHsla(){
  var hueValueHsla = document.getElementById("hueBar").value;
  var saturationValueHsla = document.getElementById("saturationBar").value;
  var lightnessValueHsla = document.getElementById("lightnessBar").value;
  var alphaValueHsla = document.getElementById("hslaAlphaBar").value;

  document.getElementById("hueBar").title = hueValueHsla;
  document.getElementById("saturationBar").title = saturationValueHsla + "%";
  document.getElementById("lightnessBar").title = lightnessValueHsla + "%";
  document.getElementById("hslaAlphaBar").title = alphaValueHsla;
  
  var colorSampleHsla = document.getElementById("hslaColorSample");
  colorSampleHsla.style.backgroundColor = "hsla(" +hueValueHsla+ "," +saturationValueHsla+
   "%," + lightnessValueHsla+ "%," +alphaValueHsla+ ")";
   
  var hslaCode = document.getElementById("hslaCode");
  hslaCode.innerText = "hsla(" +hueValueHsla+ ", " +saturationValueHsla+
   "%, " + lightnessValueHsla+ "%, " +alphaValueHsla+ ")";
}

function paintColorSampleHsl(){
  var hueValueHsl = document.getElementById("hueBarHsl").value;
  var saturationValueHsl = document.getElementById("saturationBarHsl").value;
  var lightnessValueHsl = document.getElementById("lightnessBarHsl").value;

  document.getElementById("hueBarHsl").title = hueValueHsl;
  document.getElementById("saturationBarHsl").title = saturationValueHsl + "%";
  document.getElementById("lightnessBarHsl").title = lightnessValueHsl + "%";
  
  var colorSampleHsl = document.getElementById("hslColorSample");
  colorSampleHsl.style.backgroundColor = "hsl(" +hueValueHsl+ "," +saturationValueHsl+
   "%," + lightnessValueHsl+ "%)";
   
  var hslCode = document.getElementById("hslCode");
  hslCode.innerText = "hsl(" +hueValueHsl+ ", " +saturationValueHsl+
   "%, " + lightnessValueHsl+ "%)";
}

function paintColorSampleHexadecimal(){
  let hexaRedValue1 = document.getElementById("hexaRedBar1").value;
  let hexaRedValue2 = document.getElementById("hexaRedBar2").value;
  let hexaGreenValue1 = document.getElementById("hexaGreenBar1").value;
  let hexaGreenValue2 = document.getElementById("hexaGreenBar2").value;
  let hexaBlueValue1 = document.getElementById("hexaBlueBar1").value;
  let hexaBlueValue2 = document.getElementById("hexaBlueBar2").value;

  const numbers = [10,11,12,13,14,15];
  const letters = ['a','b','c','d','e','f'];

  for( i = 0; i < numbers.length; i++){
  	if(hexaRedValue1 == numbers[i]){ hexaRedValue1 = letters[i]}
  	if(hexaRedValue2 == numbers[i]){ hexaRedValue2 = letters[i]}
  	if(hexaGreenValue1 == numbers[i]){ hexaGreenValue1 = letters[i]}
  	if(hexaGreenValue2 == numbers[i]){ hexaGreenValue2 = letters[i]}
  	if(hexaBlueValue1 == numbers[i]){ hexaBlueValue1 = letters[i]}
  	if(hexaBlueValue2 == numbers[i]){ hexaBlueValue2 = letters[i]}
  }

  document.getElementById("hexaRedBar1").title = hexaRedValue1; 
  document.getElementById("hexaRedBar2").title = hexaRedValue2;
  document.getElementById("hexaGreenBar1").title = hexaGreenValue1;
  document.getElementById("hexaGreenBar2").title = hexaGreenValue2;
  document.getElementById("hexaBlueBar1").title = hexaBlueValue1;
  document.getElementById("hexaBlueBar2").title = hexaBlueValue2;

  var colorSampleHexadecimal = document.getElementById("hexadecimalColorSample");
  colorSampleHexadecimal.style.backgroundColor = "#"+hexaRedValue1+hexaRedValue2+
  hexaGreenValue1+hexaGreenValue2+hexaBlueValue1+hexaBlueValue2;

  var hexadecimalCode = document.getElementById("hexadecimalCode");
  hexadecimalCode.innerText = "#"+hexaRedValue1+hexaRedValue2+
  hexaGreenValue1+hexaGreenValue2+hexaBlueValue1+hexaBlueValue2;
}


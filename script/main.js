setInterval('checkClock()',1000);
setInterval('drawHourCircle()',60000);

function onload(){
  checkClock();
  drawHourCircle();
}

function checkClock() {
  var now = new Date();
  drawDigitalClock(now);

  if(now.getHours()==0 && now.getMinutes()==0 && now.getSeconds()==0){
    clearHourCircle();
  }
}

function drawDigitalClock(now){
   var nowTimeText = ("0"+now.getHours()).slice(-2)
                       + ":" + ("0"+now.getMinutes()).slice(-2)
                       + ":" + ("0"+now.getSeconds()).slice(-2);

   document.getElementById("clock").innerHTML = nowTimeText;
}

function clearHourCircle() {
  var canvas = document.getElementById('canvas');

  if (canvas.getContext){
    var context = canvas.getContext('2d');
  }

  canvas.clearRect(0, 0, 600, 600);
}

function drawHourCircle(){
  var canvas = document.getElementById('canvas');

  if (canvas.getContext){
    var context = canvas.getContext('2d');
  }

  var centerPosition = {
    x:320,
    y:300
  }
  var radius = 200;
  var colorset = getColorSet();

  drawClockEdge(centerPosition, radius, colorset.edge, context);
  drawClockNumber(centerPosition, radius, colorset.number, context);
  drawClockFilling(centerPosition, radius, colorset.filling, context);
  drawPartingLine(centerPosition, radius, colorset.partingLine, context);
}

function drawClockEdge(center, radius, color, context){
  context.strokeStyle = color;
  context.beginPath();
  context.arc(center.x, center.y, radius, 0, Math.PI*2, false);
  context.stroke();
}

function drawClockNumber(center, radius, color, context){
  context.font = "36px 'Wire One'";
  context.strokeText("0", center.x-10, center.y-radius-12);
  context.strokeText("3", center.x+radius/2+50, center.y-radius/2-50);
  context.strokeText("6", center.x+radius+18, center.y+12);
  context.strokeText("9", center.x+radius/2+55, center.y+radius/2+70);
  context.strokeText("12", center.x-18, center.y+radius+36);
  context.strokeText("15", center.x-radius/2-80, center.y+radius/2+75);
  context.strokeText("18", center.x-radius-50, center.y+12);
  context.strokeText("20", center.x-radius/2-90, center.y-radius/2-50);
}

function drawClockFilling(center, radius, color, context){
  var now = new Date();
  var nowPosition = (Math.PI*2) * ((now.getHours() * 60 + now.getMinutes()) / (60 * 24));

  context.strokeStyle = color;
  context.beginPath();
  context.moveTo(center.x, center.y);
  context.arc(center.x, center.y, Math.floor(radius*0.95), -Math.PI/2, -Math.PI/2 + nowPosition , false);
  context.closePath();
  context.fillStyle = color;
  context.fill();  
}

function drawPartingLine(center, radius, color, context){
  context.strokeStyle = color;

  context.beginPath();
  context.moveTo(center.x-radius, center.y);
  context.lineTo(center.x+radius, center.y);
  context.stroke();

  context.beginPath();
  context.moveTo(center.x, center.y-radius);
  context.lineTo(center.x, center.y+radius);
  context.stroke();  

  var distance = Math.floor(radius/Math.sqrt(2));

  context.beginPath();
  context.moveTo(center.x-distance , center.y-distance );
  context.lineTo(center.x+distance , center.y+distance );
  context.stroke();

  context.beginPath();
  context.moveTo(center.x+distance , center.y-distance );
  context.lineTo(center.x-distance , center.y+distance );
  context.stroke();
}

function getColorSet(){
  var colorset = {
    edge: '#262626',
    number: '#262626',
    filling: '#FF6860',
    partingLine: '#CCDFCC'
  }  

  return colorset;
}
function showClock() {
   var nowTime = new Date();
   var nowHour = nowTime.getHours();
   var nowMinute = nowTime.getMinutes();
   var nowSecond = nowTime.getSeconds();
   var nowTimeText = ("0"+nowHour).slice(-2) + ":" + ("0"+nowMinute).slice(-2) + ":" + ("0"+nowSecond).slice(-2);
   document.getElementById("clock").innerHTML = nowTimeText;
  }

setInterval('showClock()',1000);

function draw(){
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var context = canvas.getContext('2d');
  }

  var centerX = 320;
  var centerY = 300;

  context.strokeStyle = '#262626';
  context.beginPath();
  context.arc(centerX, centerY, 200, 0, Math.PI*2, false);
  context.stroke();

  context.font = "36px 'Wire One'";
  context.strokeText("0", centerX-10, centerY-200-18);
  context.strokeText("6", centerX+200+18, centerY);
  context.strokeText("12", centerX-18, centerY+200+36);
  context.strokeText("18", centerX-200-50, centerY);

}
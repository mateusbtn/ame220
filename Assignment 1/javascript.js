var boxStatus = new Array(30);
var cont = 0;
do {
  boxStatus[cont] = "left";
  cont++;
} while (cont < 30);

var buttonClicked = function(n, easing)
{
  var id = "#button" + n.toString();
  var pageWidth = $("body").width();
  var boxWidth = 150;
  if(boxStatus[n] == "left"){
    $(id).animate({"margin-left" : pageWidth - boxWidth - 10 + "px"}, 2000, easing); 
    boxStatus[n] = "right";
  }
  else{
    $(id).animate({"margin-left" : "0px"}, 2000, easing); 
    boxStatus[n] = "left";
  }
}

$(window).on('load', function () {
      setTimeout(function () {
    $(".loader-page").css({visibility:"hidden",opacity:"0"})
  }, 3000);
     
});



var cant = 300;
var offset = 2 / cant;
var increment = Math.PI * (3 - Math.sqrt(5));
var canvas = document.getElementById("canvas");

var i;
var circle;

//---Build the elements
for(i = 0; i < cant; i++){
  
  circle = document.createElement("div");
  circle.className = "point";
  circle.setAttribute("data-index", i);
  
  canvas.appendChild(circle);
  
};

//---Apply transformations to points
function updatePoints(evt){
  
  var x, y, z, r, a, scale, opacity, point, style;
  
  var angle = (evt) ? (-evt.pageX / 4) * Math.PI / 180 : 0;
  
  for(i = 0; i < cant; i++){

    y = (i * offset - 1) + (offset / 2);
    r = Math.sqrt(1 - Math.pow(y, 2));
    a = ((i + 1) % cant) * increment + angle;
    x = Math.cos(a) * r;
    z = Math.sin(a) * r;

    scale = Math.round(z * 20000) / 100;
    opacity = (1 + z) / 1.5;
    
    style = "translate3d(" + (125 + x * 100) + "px, " + (125 + y * 100) + "px, " + scale + "px)";
    
    point = canvas.querySelectorAll("[data-index='" + i +"']");
    point[0].style.WebkitTransform = style;
    point[0].style.msTransform = style;
    point[0].style.transform = style;
    point[0].style.opacity = opacity;

  }
  
}

//---Update the points at start
updatePoints();

//---Update the points on mouse move
document.addEventListener("mousemove", updatePoints);
document.addEventListener("pointermove", updatePoints);
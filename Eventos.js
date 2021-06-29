var teclas = {
  UP:38,
  LEFT:37,
  DOWN:40,
  RIGHT:39
};
var cuadrito = document.getElementById("cuadro_1");
var papel = cuadrito.getContext("2d");
var movimiento = 10;
var x = 150;
var y = 150;
var x_1 = 100;
var y_1 = 100;

document.addEventListener("keydown", dibujarTeclado);

cuadrito.addEventListener("mousedown", precionarMouse);
cuadrito.addEventListener("mouseup", soltar_Mouse);
cuadrito.addEventListener("mousemove", mover_Mouse);

function precionarMouse(evento)
{
  console.log(evento);
  estado = 1;
  x = evento.layerX;
  y = evento.layerY;
}

function mover_Mouse(evento)
{
  if (estado = 1){
      dibujar_lineas("red",x,y,evento.layerX,evento.layerY,papel);
  }
  console.log(evento);
  x = evento.layerX;
  y = evento.layerY;

  }

  function soltar_Mouse(evento)
  {
  console.log(evento);
  estado = 0
  x = evento.layerX;
  y = evento.layerY;
  }


dibujar_lineas( "red", 149,149,151,151,papel);

function dibujar_lineas ( color, x_in, y_in, x_fin, y_fin, lienzo_3)
{
  lienzo_3.beginPath();
  lienzo_3.strokeStyle = color;
  lienzo_3.lineWidth = 1;
  lienzo_3.moveTo(x_in,y_in);
  lienzo_3.lineTo(x_fin,y_fin);
  lienzo_3.stroke();
  lienzo_3.closePath();
}

function dibujarTeclado(evento)
{
  switch(evento.keyCode)
    {
      case teclas.UP:
        dibujar_lineas("red", x,y,x,y - movimiento, papel)
        console.log("arriba");
        y = y - movimiento;
      break;
      case teclas.DOWN:
      dibujar_lineas("red", x,y,x,y + movimiento, papel)
        console.log("abajo");
        y = y + movimiento;
      break;
      case teclas.LEFT:
      dibujar_lineas("red", x, y, x - movimiento, y, papel)
        console.log("izquierda");
        x = x - movimiento;
      break;
      case teclas.RIGHT:
        dibujar_lineas("red", x, y, x + movimiento, y, papel)
        console.log("derecha");
        x = x + movimiento;
      break;
      default:
      console.log("Otra tecla");
    }
}

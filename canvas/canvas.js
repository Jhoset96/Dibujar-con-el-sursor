
var a = document.getElementById("dibujo");
var papel = a.getContext("2d");
var boton_2 = document.getElementById("numero_lineas2");
var caja_3 = document.getElementById("numero_lineas1");
var caja_1 = document.getElementById("caja_Texto peso");
var caja_2 = document.getElementById("caja_Texto altura");
var boton = document.getElementById("botoncito");
var x1,y1,x2,y2;

boton.addEventListener("click", ecuación_Valor);
boton_2.addEventListener("click", dibujar_forma);
var dibujito = document.getElementById("dibujo");
var dibujito_1 = dibujito.getContext("2d");


function dibujar_Canvas (color,x1,y1,x2,y2) {
dibujito_1.beginPath();
dibujito_1.linewidth = 3;
dibujito_1.strokeStyle= color;
dibujito_1.moveTo(x1,y1);
dibujito_1.lineTo(x2,y2);
dibujito_1.stroke();
dibujito_1.closePath();
}

function dibujar_forma () {
  var numero_lineas = parseInt(caja_3.value);
  var ancho = a.width;
  for (let l=0; l<numero_lineas; l++){
    dibujar_Canvas ("blue",0,y1,x2,300);
    y1 = l * (ancho/numero_lineas);
    x2 = (ancho/numero_lineas) * (l+1);
  }
}

function ecuación_Valor (){
 var kilos = (caja_1.value);
 var estatura = (caja_2.value);
 var total = ((kilos / (estatura*estatura)));
 document.getElementById("valor IMC").innerHTML=total;
}

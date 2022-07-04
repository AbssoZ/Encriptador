/*Este programa encripta mensajes, intercambia las vocales por palabras.
Se seguira el siguiente orden para no repetir las mismas vocales.
e --> enter
o --> orber
i --> imes
a --> ai
u --> ufat
*/
function encriptar(){
//i mayusculas y minusculas
//g toda la linea u oracion
//m es para multiples lineas o prrafos
	var texto = document.getElementById("inputText").value.toLowerCase();
	var txtCifrado = texto.replace(/e/igm,"enter");
	var txtCifrado = txtCifrado.replace(/o/igm,"ober");
	var txtCifrado = txtCifrado.replace(/i/igm,"imes");
	var txtCifrado = txtCifrado.replace(/a/igm,"ai");
	var txtCifrado = txtCifrado.replace(/u/igm,"ufat");
	document.getElementById("MunhecoImg").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("texto2").innerHTML = txtCifrado;
	document.getElementById("buttonCopiar").style.display = "show";
	document.getElementById("buttonCopiar").style.display = "inherit";
}
function desencriptar(){
//i mayusculas y minusculas
//g toda la linea u oracion
//m es para multiples lineas o prrafos
	var texto = document.getElementById("inputText").value.toLowerCase();
	var txtCifrado = texto.replace(/enter/igm,"e");
	var txtCifrado = txtCifrado.replace(/ober/igm,"o");
	var txtCifrado = txtCifrado.replace(/imes/igm,"i");
	var txtCifrado = txtCifrado.replace(/ai/igm,"a");
	var txtCifrado = txtCifrado.replace(/ufat/igm,"u");
		document.getElementById("MunhecoImg").style.display = "none";
		document.getElementById("texto").style.display = "none";
		document.getElementById("texto2").innerHTML = txtCifrado;
		document.getElementById("buttonCopiar").style.display = "show";
		document.getElementById("buttonCopiar").style.display = "inherit";
}

function copiar(){
	var contenido = document.querySelector("#texto2");
		contenido.select();
		document.execCommand("copy");
		
}

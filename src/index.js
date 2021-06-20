
  import cipher from './cipher.js'; 
  
// Declarando la variable para el evento click de cifrar//
  let checkBtn1 = document.getElementById('encode');
  
// Capturando el contenido de box1 para cifrar en la consola //
checkBtn1.addEventListener('click', getEncode);

function getEncode () {
      // Delcarando variables a usar//
      let box1 = document.getElementById('box1').value;
      let box2 = document.getElementById('box2');
      let offset = document.getElementById('desplazamiento').value;
      // Moviendo de box1 to box 2 //
          //box2.innerHTML = box1
      // Contenido del box2//
      let resultado = cipher.encode(box1, offset);
      // console.log(resultado);
      //Insertando el contenido al box2//  
        box2.innerHTML = resultado
}


// Declarando la variable para el evento decifrar//
let checkBtn2 = document.getElementById('decode');
// capturando el contenido de box1 para decifrar //
checkBtn2.addEventListener('click', getDecode);

function getDecode () {
let box1 = document.getElementById('box1').value;
let number = document.getElementById('offset');
 //console.log(box1);
 cipher.decode(box1, number);
}
 // Declarando la variable para el evento limpiar//
/*let checkBtn3 = document.getElementById('clean');
checkBtn3.addEventListener('click', getClean);
function getClean(){
 } */
 /*
/* // (1) Pasar contenido de la caja1 a la caja2 //
 let checkBtn1 = document.getElementById('encode');
 checkBtn1.addEventListener('click', moveTo);
 function moveTo() {
  let box1 = document.getElementById('box1').value;
  let box2 = document.getElementById('box2'); 
  box2.innerHTML = box1*/

 /* // (2)**"Convertir" una letra en su código ASCII**
    // box2.innerHTML = box1.charCodeAt(0); */

  /* (3) **"Cifrar" A o B con un desplazamiento (offset) de 3**
Cuando escriba A o B en la caja de texto 1 y le dé click al botón, quiero que apaezca la letra cifrada en la caja de texto 2. Por ejemplo, si escribo B debe aparecer E.
   let cifrado = "";
  for (let i = 0; i <= box1.length; i++) {
    
    // la variable me devolvera la posicion (numero) de index cero//
    let asciiPosition = box1.charCodeAt(i);
    console.log(asciiPosition);
    //El valor de offset es un string //
    let offset = document.getElementById('offset').value;
    //console.log(offset);
    // newPosition su valor será el número de posición de la nueva letra//
    /* let newPosition = (asciiPosition + parseInt(offset));
       console.log(newPosition);
     box2.innerHTML = newPosition
     // el string.fromCharCode() me devolverá la nueva letra//
     let newLetter = String.fromCharCode(newPosition);*/
    //box2.innerHTML = newLetter*/

 /*  // (4)**"Cifrar" una letra con un desplazamiento de 30 caracteres** // (x -65 + offset ) %26 + 65 	
   //  A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,J:73J:74,K:75,L:76,M:77,
   // N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90
   
  if (asciiPosition >= 65 && asciiPosition <=90) {
    // la variable me dará la posición (número) de la nwewLeter/
    let newAsciiPosition = (asciiPosition - 65 + parseInt(offset)) % 26 + 65;
    console.log(newAsciiPosition);
    // la variable me dara la nueva letra en Ascii usando la posición//

   // let newLetterAscii = String.fromCharCode(newAsciiPosition);
   // console.log(newLetterAscii);
		cifrado += String.fromCharCode(newAsciiPosition);
    box2.innerHTML = cifrado
    console.log(cifrado);
		} else {
		cifrado += " ";
		}
  }
}*/


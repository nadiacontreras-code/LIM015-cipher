
  import cipher from './cipher.js';

 // Declarando la variable para el evento click de cifrar//
  let checkBtn1 = document.getElementById('encode');
  // Capturando el contenido de box1 para cifrar en la consola //
checkBtn1.addEventListener('click', getEncode);

function getEncode () {
      // Delcarando variables a usar//
      let texto = document.getElementById('box1').value;
      let box1 = texto.toUpperCase();
      //console.log(box1);
      let box2 = document.getElementById('box2');
      let offset = document.getElementById('desplazamiento').value;

      if ( box1 === "" || offset === ""){
        alert("Por favor seleccione un número y/o ingrese un texto");
      }
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
        let box1 =document.getElementById('box1').value;
        let offset = document.getElementById('desplazamiento').value;
        //console.log(box1);
        let box2 = document.getElementById('box2');
        if ( box1 === "" || offset === ""){
          alert("Por favor seleccione un número y/o ingrese un texto");
        }
          let resultado =  cipher.decode(box1, offset);
          //Ingresando contenido a box2//
          box2.innerHTML = resultado
  }
 // Declarando la variable para el evento limpiar//
/*let checkBtn3 = document.getElementById('clean');
checkBtn3.addEventListener('click', getClean);
function getClean(){
}

*/
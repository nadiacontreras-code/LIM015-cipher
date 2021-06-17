
  import cipher from './cipher.js'; 
  
// Declarando la variable para el evento click de cifrar//
  let checkBtn1 = document.getElementById('send');
  
// Capturando el contenido de box1 para cifrar en la consola //
checkBtn1.addEventListener('click', getEncode);

function getEncode () {
  // capturando box1 en la consola con el click//
  let box1 = document.getElementById('box1').value;
       //console.log(box1);
  // Moviendo de box1 to box 2 :Capturando el contenido de box2 y declarandolo en una variable//
      let texto2 =document.getElementById('box2');
  //Creando el texto para el box2 /
      //texto2.textContent = box1
      //let box2 = texto2.innerHTML = box1
  // declarando variable para el número de posiciones//
  cipher.encode(box1);  
 
    /*function cifrar(string) {
    let resultado = "";
    for (let i = 0; i < string.length; i++) {
      let text = string[i]
			
			let textAscii = string[i].charCodeAt();
      if (textAscii >= 65 && textAscii <= 90) {
      //console.log(textAscii);
        let newText = ((textAscii - 65 + parseInt(number)) % 26 + 65);
        console.log(newText);

        resultado += String.fromCharCode(parseInt(newText));
        console.log(resultado);
        texto2.innerHTML = resultado
      }
      if (string[i] === " ") {
         resultado += " ";
      }
      //resultado += string[i];
    }
  }
cifrar(box1);*/
};

// Declarando la variable para el evento decifrar//
let checkBtn2 = document.getElementById('receive');
// capturando el contenido de box1 para decifrar //
checkBtn2.addEventListener('click', getDecode);

function getDecode () {
let box3 = document.getElementById('box1').value;
 //console.log(box3);
 cipher.decode(box3);

};
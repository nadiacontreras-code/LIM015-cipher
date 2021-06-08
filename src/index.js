import cipher from './cipher.js';

console.log(cipher);

// Creando la variable para el evento click//
  let checkBtn = document.getElementById('send');

// Capturando el contenido de box1 y pasando a box2 //
checkBtn.addEventListener('click', getBox1);

function getBox1 () {
  // capturando box1 en la consola con el click//
  let box1 = document.getElementById('box1').value;
  //console.log(document.getElementById('box1').value);
  console.log(box1);

  // Moviendo de box1 to box 2 //
  // Capturando el contenido de mensaje2 y guardandolo en una variable//
  let texto2 = document.getElementById('box2');
  //Creando el texto para el box2 //
  //texto2.textContent = box1
  texto2.innerHTML = box1
};
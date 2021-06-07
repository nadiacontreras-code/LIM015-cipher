import cipher from './cipher.js';

console.log(cipher);

// Guardando contenido de box1 //
function getMessage () {
    let mensaje1 = document.getElementById('mensaje1').value;
  }
  // Creando la variable para el evento click//
  let checkBtn = document.getElementById('send');
  
  // USando el EventListener //
  
   /* checkBtn.addEventListener('click', getBox1);
    function getBox1 () {
    console.log(document.getElementById('mensaje1').value);*/
  
  checkBtn.addEventListener('click', ()=> {
    let mensaje1 = document.getElementById('mensaje1').value;
    //alert("Probando"); -probando funcionalidad del botón
    //console.log(document.getElementById('mensaje1').value);
   console.log(mensaje1);
    
  // Moviendo de box1 to box 2 //
  
  // Creando un nuevo elemento y guardandolo en una variable//
  
  let texto2 = document.getElementById('mensaje2');
  //Creando el texto //
  texto2.textContent = mensaje1
});
  //texto2.appendChild(box2);
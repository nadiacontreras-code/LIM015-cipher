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
  console.log(box1.toUpperCase());

// Moviendo de box1 to box 2 //
  // Capturando el contenido de box2 y guardandolo en una variable//
  let texto2 =document.getElementById('box2');
  //Creando el texto para el box2 //
  //texto2.textContent = box1
  let box2 = texto2.innerHTML = box1
// declarando variable para el número de posiciones//
   //let number= document.getElementById('number').value;
//console.log(number);
//console.log(box2);
//Cifrando las letras//

  
  let letras= [ 
    {name:"A", position: 65},
    {name:"B", position: 66},
    {name:"C", position: 67}
    ];
    
    console.log(letras[0].position);
    if (box2===""){
      alert=('Escriba')
    } {
      for (i=0;i<=letras.length;i++){
      let i = document.getElementById('number').value;
      console.log(letras[i]);
    }
    }
    let cifrado = (box2-65 + number)%26 + 65
  }
 /* let cifrar ={
    letra:'A', ubicacion:65, letra:'B', ubicacion:66, letra:'C', ubicacion:67,
    letra:'D', ubicacion:68, letra:'E', ubicacion:69, letra:'F', ubicacion:70,
    letra:'G', ubicacion:71, letra:'H', ubicacion:72, letra:'I', ubicacion:73,
    letra:'J', ubicacion:74, letra:'K', ubicacion:75, letra:'L', ubicacion:76,
    letra:'M', ubicacion:77, letra:'N', ubicacion:78, letra:'O', ubicacion:79,
    letra:'P', ubicacion:80, letra:'Q', ubicacion:81, letra:'R', ubicacion:82,
    letra:'S', ubicacion:83, letra:'T', ubicacion:84, letra:'U', ubicacion:85,
    letra:'V', ubicacion:86, letra:'W', ubicacion:87, letra:'X', ubicacion:88,
    letra:'Y', ubicacion:89, letra:'Z', ubicacion:90
    };

     for (let i = 0; i < cifrar.length; i++) {
     if (i=box1) {
      console.log(cifrar[i].ubicacion);

     }
     
      console.log(cifrar[i].ubicacion);
    }

  };*/

 const cipher = { //un objeto por lo tanto tengo que declarar las variables en el valor function dentro de la f
  // propiedad encode, valor function string//
    encode: function encode (string, offset) { // elparametro offset no me funciona como argumento ( en vez de number)//
      //declaramos las variables locales usadas en esta function//
      let box1 = document.getElementById('box1');
      let texto2 = document.getElementById('box2');
      let number = document.getElementById('offset').value; //su valor es un string//
      //declaramos la variable que recibira el texto codoficado//
      let resultado = "";
      //Creamos una iteracion for que recorrera cada letra de nuestro string//
      for (let i = 0; i < string.length; i++) {
        let text = string[i]
      //Declaramos una variable que tenga el valor de la posición (un número) de la letra en el codigo Ascii//
        let asciiPosition = string[i].charCodeAt();
        // Creamos la condición que deberá cumplir los valores retornados //
        if (asciiPosition >= 65 && asciiPosition <= 90) {
          //console.log(asciiPosition;
          //Declaramos una variable  que tenga la nueva posicion en el codigo Ascii, utilizando la variable number//
          let newAsciiPosition = ((asciiPosition - 65 + parseInt(number)) % 26 + 65); // 
         //console.log(newAsciiPosition);
         //En la variable declarada resultado, le actualizamos su valor con la nueva letra codificada//
            resultado += String.fromCharCode(parseInt(newAsciiPosition));
          console.log(resultado);
          // La palabra ya codificada la ingresamos a la caja 2 mediante el innerHTML
          texto2.innerHTML = resultado
          // Si no se cumple la condición entonces el valor de resultado sera un espacio vacio //
           } else {
            resultado += " ";
            }//resultado += string[i];
        }
     //(box1, number);
    },
  decode: function (string2, offset){
    let box1 = document.getElementById("box1");
    let texto2 = document.getElementById('box2');
    let number = document.getElementById('offset').value;
    let resultado = "";
    //Creando la iteracion `para buscar en cada letra de resultado//
    for(let i=0; i < string2.length; i++){
      //obtenemos cada letra de resultado y luego vamos a optener la posición (numero) de cada letra//
      let asciiPosition = string2[i].charCodeAt();
     //console.log (asciiPosition);
      if(asciiPosition>=65 && asciiPosition <=90){
        // obtenemos la posición(número) descifrada//
          let newAsciiPosition =(parseInt((asciiPosition + 65 - parseInt(number)))% 26 )+ 65;
          //console.log(newAsciiPosition);
          // obteniendo la letra que corresponde a la posición descifrada(newAscii) y adjuntando a resultado//
            resultado += String.fromCharCode(parseInt(newAsciiPosition));
            console.log(resultado);
            //Ingresando el texto descifrado en el box2//
             texto2.innerHTML = resultado
         } else {
           resultado += " "
           }
     }
    //return resultado;
    //(box1, number); llamando a la función
  }

}

export default cipher;

 const cipher = { //un objeto por lo tanto tengo que declarar las variables en el valor function dentro de la f
  // propiedad encode, valor function string//
    encode: function  (string) {
      //declaramos las variables locales usadas en esta function//
      let box1 = document.getElementById('box1').value;
      let texto2 = document.getElementById('box2');
      let number = document.getElementById('number').value;
      //declaramos la variable que recibira el texto codoficado//
      let resultado = "";
      //Creamos una iteracion for que recorrera cada letra de nuestro string//
      for (let i = 0; i < string.length; i++) {
        let text = string[i]
      //Declaramos una variable que tenga el valor de la posición (un número) de la letra en el codigo Ascii//
        let textAscii = string[i].charCodeAt();
        // Creamos la condición que deberá cumplir los valores retornados //
        if (textAscii >= 65 && textAscii <= 90) {
          //console.log(textAscii);
          //Declaramos una variable  que tenga la nueva posicion en el codigo Ascii, utilizando la variable number//
          let newText = ((textAscii - 65 + parseInt(number)) % 26 + 65);
         // console.log(newText);
         //En la variable declarada resultado, le actualizamos su valor con la nueva letra codificada//
            resultado += String.fromCharCode(parseInt(newText));
          console.log(resultado);
          // La palabra ya codificada la ingresamos a la caja 2 mediante el innerHTML
          texto2.innerHTML = resultado
          // Si no se cumple la condición entonces el valor de resultado sera un espacio vacio //
           }if (string[i] === " ") {
            resultado += " ";
            }//resultado += string[i];
        }
    return box1;
    },
  decode: function (string2){
    let box1 = document.getElementById("box1");
    let texto2 = document.getElementById('box2');
    let number = document.getElementById('number').value;
    let resultado = "";
    //Creando la iteracion `para buscar en cada letra de resultado//
    for(let i=0; i < string2.length; i++){
      //obtenemos cada letra de resultado y luego vamos a optener la posición (numero) de cada letra//
      let textAscii = string2[i].charCodeAt();
      console.log (textAscii);
      if(textAscii>=65 && textAscii <=90){
        // obtenemos la posición(número) descifrada//
          let newAscii =(parseInt((textAscii + 65 - parseInt(number)))% 26 )+ 65;
          console.log(newAscii);
          // obteniendo la letra que corresponde a la posición descifrada(newAscii) y adjuntando a resultado//
            resultado += String.fromCharCode(parseInt(newAscii));
            console.log(resultado);
            //Ingresando el texto descifrado en el box2//
             texto2.innerHTML = resultado
         } if (string2[i] === " ") {
           resultado += " "
           }
     }
    //return resultado;
    return box1;
  }

}

export default cipher;

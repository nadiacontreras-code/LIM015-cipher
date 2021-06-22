
const cipher = {
    encode: function (box1, offset) { // elparametro offset no me funciona como argumento ( en vez de number)//
          let cifrado = "";
        if (box1=== 0 || box1 === null){
        throw new (TypeError)
        }
        if (offset=== 0 || offset === null){
          throw new (TypeError)
          }
          //Creamos una iteracion for que recorrera cada letra de nuestro string//
            for (let i = 0; i < box1.length; i++) {

              //Declaramos una variable que tenga el valor de la posición (un número) de la letra en el codigo Ascii//
                let asciiPosition = box1[i].charCodeAt();
                // Creamos la condición que deberá cumplir los valores retornados //
                if (asciiPosition >= 65 && asciiPosition <= 90) {
                    //console.log(asciiPosition);
                    //Declaramos una variable  que tenga la nueva posicion en el codigo Ascii, utilizando la variable number//
                    let newAsciiPosition = ((asciiPosition - 65 + parseInt(offset)) % 26 + 65); // 
                    //  console.log(newAsciiPosition);
                    //En la variable declarada resultado, le actualizamos su valor con la nueva letra codificada//
                    cifrado += String.fromCharCode(parseInt(newAsciiPosition));
                    // console.log(cifrado);
                    // La palabra ya codificada la ingresamos a la caja 2 mediante el innerHTML
                    //box2.innerHTML = cifrado
                    // Si no se cumple la condición entonces el valor de resultado sera un espacio vacio //
                    } else {
                      cifrado += " ";
                      }//cifrado += string[i];
              }
        return cifrado;
    },
  decode: function (box1, offset){

        let decifrado = "";
        if (box1=== 0 || box1 === null){
          throw new (TypeError)
          }
          if (offset=== 0 || offset === null){
            throw new (TypeError)
            }
        //Creando la iteracion `para buscar en cada letra de decifrado//
        for(let i=0; i < box1.length; i++){
              //obtenemos cada letra de decifrado  y luego vamos a optener la posición (numero) de cada letra//
              let asciiPosition = box1[i].charCodeAt();
              //console.log (asciiPosition);
              if(asciiPosition>=65 && asciiPosition <=90){
                  // obtenemos la posición(número) descifrada//
                  let newAsciiPosition =(parseInt((asciiPosition + 65 - parseInt(offset)))% 26 )+ 65;
                  //console.log(newAsciiPosition);
                  // obteniendo la letra que corresponde a la posición descifrada(newAscii) y adjuntando a decifrado//
                  decifrado += String.fromCharCode(parseInt(newAsciiPosition));
                  //console.log(decifrado);
                  //Ingresando el texto descifrado en el box2//
                  // box2.innerHTML = decifrado
                  } else {
                    decifrado += " "
                  }
        }
        return decifrado;
  }
}

export default cipher;

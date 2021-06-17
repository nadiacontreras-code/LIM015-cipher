const cipher = {
  // Cipher es un objeto por lo tanto tengo que declarar las variables a usar dentro de la function//
    encode: function  (string) {
      let texto2 = document.getElementById('box2');
      let number = document.getElementById('number').value;
      
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
  
      
  return box1;
    },
  decode: function (string2){
    let texto2 = document.getElementById('box2');
    let number = document.getElementById('number').value;

    let resultado = "";
    for(let i=0; i < string2.length; i++){
      let textDecode = string2[i];
      let textAscii = String.fromCharCode(textDecode);
      if(textAscii>=65 && textAscii <=90){
        
      }
    }
  }

}

export default cipher;

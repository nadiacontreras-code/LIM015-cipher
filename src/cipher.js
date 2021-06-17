const cipher = {
    encode : function (string) {
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
  
      
  return string;
    },

}
console.log(cipher.encode(box1));
export default cipher;

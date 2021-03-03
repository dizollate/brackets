module.exports = function check(str, bracketsConfig) {
  let string = str;
  const pairsBrackets = bracketsConfig.map(([open, close]) => {
    if(isNaN(+open)) {
      return `\\${open}\\${close}`;
      }
    
    return `${open}${close}`;
});
  while(string.length) {
    let lengthBef = string.length;
    let lengthAf;
    
    for(let value of pairsBrackets){
      const reg = new RegExp(value, flags:'g');
      string = string.replace(reg, "");
      lengthAf = string.length;
      }
    if(lengthBef === lengthAf) break;
    }
  return string.length === 0;
} 

const posicionTransaparente =  (value) => {
  
  value = value+1;

  if (value >= 2 && value <= 17) {
    return true;
  } 

  else if (value >= 21 && value <= 30) {
    return true;
  }

  else if (value >= 39 && value <= 48) {
    return true;
  }

  else if (value >= 127 && value <= 129) {
  
    return true;
  }

  else if (value >= 145 && value <= 147) {
  
    return true;
  }
  
};

const saltoDeLinea = (val) => { 
  return val == 125;
};

const dataFooter = [
  ["Alcalinos", "bg-alcalinos"],
  ["Alcalinotérreos", "bg-alcalinoterreos"],
  ["Metales de transición/ Bloque D", "bg-metalestransicion"],
  ["Lantánidos", "bg-lantanidose"],
  ["Actínidos", "bg-actinidos"],
  ["Otros Metales", "bg-otros-metales"],
  ["Metaloides", "bg-metaloides"],
  ["Otros no metales", "otros-no-metales"],
  ["Halógeno", "bg-halogenos"],
  ["Gases nobles", "bg-gases-nobles"],
];
const footerRender = () => {
  return dataFooter;
};

const IsModule = function (num1){
  num1 = num1 +1
  if(num1%18 ==0){
    return  true
  }
  else{
    return false
  }
  
}

exports.IsModule = IsModule;
exports.saltoDeLinea = saltoDeLinea;
exports.footerRender = footerRender;
exports.posicionTransaparente = posicionTransaparente;
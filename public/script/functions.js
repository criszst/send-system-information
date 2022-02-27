module.exports = function checkNumber(nb) {

   Number.isInteger = Number.isInteger || function(nb) {
    if (typeof nb === "number" && isFinite(numb) && Math.floor(nb) === nb) return console.log('ta, pelo jeito o polyfill teve q dar um jeito')

    else return console.log('n é um numero')
  }
  
  return console.log(Number.isInteger(nb) === true)
}
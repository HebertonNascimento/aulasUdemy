const peso1 = 1.0;
const peso2 = Number(2.0);
let nome= "Heberton";

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.8
const avaliacao2= 95.6

const total = (avaliacao1 * avaliacao2) + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // tras a virgula para duas casas decimais, e fazendo o arrendondamento
console.log(media.toString(2)) //transforma o número em binário
console.log(typeof media); //typeof, mostra o tipo daquela variável
console.log(typeof );
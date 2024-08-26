let idade = 18;
const anoNascimento = 2006;
let anoAtual = 2024;
const nomeCompleto = "Jayesky Perdigón";

console.log("Meu nome é " + nomeCompleto + " nacido no ano de " + anoNascimento + " e no ano atual " + anoAtual +" completo " + idade + " anos");

anoAtual = anoAtual +1;
idade = idade +1;

console.log(idade);
console.log(anoAtual);


//Agência de viagem Tokyo Paris Cuba Madrid China 
const listaDeDestinos = new Array(
  "Tokyo",
  "Paris",
  "Cuba",
  "Madrid",
  "China"
);

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel Vivida");
listaDeDestinos.push("Curitiba");
listaDeDestinos.push("Rio Branco");
listaDeDestinos.push("Berín");
console.log(listaDeDestinos);

const prompt = require('prompt-sync')();

let nameHero = prompt("Digite o nome do heroi, ex.: Cecis =>");
let xp = prompt("qual a quantidade de experiencia que o heroi possui ? ex.: 1000 =>")
let nivel = "";


if(xp <= 1000){
    nivel =  "Ferro";   
}
else if(xp <= 2000){
    nivel =  "Bronze";  
}
else if(xp <= 5000){
    nivel =  "Prata";  
}
else if(xp <= 7000){
    nivel =  "Ouro";  
}
else if(xp <= 8000){
    nivel =  "Platina";  
}
else if(xp <= 9000){
    nivel =  "Ascendente";  
}
else if(xp <= 10000){
    nivel =  "Imortal";  
}
else{
    nivel = "Radiante";  
}

console.log(`O Herói de nome ${nameHero} está no nível de ${nivel}`);

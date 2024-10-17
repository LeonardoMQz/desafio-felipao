// Declarando Variaveis
let heroName = "Arthur"
let heroLevel = 16700
let heroRank = "Sem Rank"

// Estrutura Condicional
if(heroLevel < 1000){
    heroRank = "Ferro"

} else if(heroLevel >= 1000 && heroLevel < 2000){
    heroRank = "Bronze"

} else if(heroLevel >= 2000 && heroLevel < 5000){
    heroRank = "Prata"

} else if(heroLevel >= 5000 && heroLevel < 7000){
    heroRank = "Ouro"

} else if(heroLevel >= 7000 && heroLevel < 8000){
    heroRank = "Platina"

} else if(heroLevel >= 8000 && heroLevel < 9000){
    heroRank = "Ascendente"

} else if(heroLevel >= 9000 && heroLevel < 10000){
    heroRank = "Imortal"

} else if(heroLevel >= 10000){
    heroRank = "Radiante"

}

// Montando Mensagem
const mensagem = "O Herói de nome " + heroName + " está no nível de " + heroRank

// Exibindo Mensagem
console.log(mensagem)
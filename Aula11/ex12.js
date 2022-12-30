var agora = new Date()
var hora = agora.getHours()
console.log(`agora são extamente ${hora} horas.`)
if(hora < 12){
    console.log('bom dia')
} else if(hora <= 18){
    console.log('boa tarde')
} else {
    (hora <= 21)
    console.log('boa noite')
}
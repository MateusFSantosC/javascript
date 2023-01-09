var dia = new Date()
var hora = dia.getHours()
if (hora <= 4 ){
    console.log('Boa Madrugada')
}else if (hora >= 5 && hora <= 11){
    console.log('Bom dia')
}else if ( hora >=12 && hora <= 18 ){
    console.log('Boa tarde')
} else if (hora >=19){
    console.log('Boa noite')
}
console.log(`agora são extamente ${hora}horas.`)
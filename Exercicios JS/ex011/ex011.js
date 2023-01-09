var idade = 43
if  (idade >= 18 && idade <= 64 ){
    console.log(`Sua idade é de ${idade}, maior de idade voto obrigatorio!`)
}else{
    if (idade >= 16 && idade <= 17 ){
        console.log(`Sua idade é de ${idade}, menor de idade, mas pode votar`)
    }else{
        if(idade < 16){
            console.log(`Sua idade é de ${idade}, menor de idade, náo pode votar`)
        }else if (idade >= 65){
            console.log(`Sua idade é de ${idade}, voto opicional`)
        }
    }
}
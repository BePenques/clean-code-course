//regras em condicionais

//1º evite sempre que possivel negações - pois são mais dificeis de serem lidas
// a negação é ruim na leitura do codigo

const isUserOlderThan18years = true;
const DoesUserLivesInBrazil = true;

if(!isUserOlderThan18years && !DoesUserLivesInBrazil){

}

//maneira melhor:


const isUserYoungerThan18years = true;
const DoesUserLivesOutsideBrazil = true;

if(isUserYoungerThan18years && DoesUserLivesOutsideBrazil){

}

//2º Early return vs else

function isUserOlderThan18Years(user){
    if(!user){
        return { error: true }
    }else{
        return user.age >= 18
    }
}

//com early return

function isUserOlderThan18Years(user){
    if(!user){
        return { error: true }
    }
    
    return user.age >= 18
    
}
//else é recomendado quando dentro do if tiver um codigo grande 
// e complexo e seja dificil de localizar o return

//3º evite condicionais aninhadas -  uma condicional dentro de outra
//é preferivel um if abaixo do que dentro, ou unir ifs dentro de um if só, caso
// continue legivel o codigo

user.age >= 18 ? user.age==18 ? 'yes' : null : null //pessimo

if(user.age > 18){
    if(user.age == 18){

    }
}
//melhor:
if(user.age && user.age == 18){

}

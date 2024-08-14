//Rota para criação de usuário(name, email, password)
//Controller(name, email, password)
//Repositorio(name, email, password)
//os parametros navegam entre os 3 metodos 

function createUserRoute(body){
    //validações

    createUserController(body)
}

//imagine que cada metodo esta em um arquivo diferente
//como saber oque é o data ? oq ele contem?
function createUserController(data){//
    userRepository.create(data)

}

const userRepository = {
    create(data){
        //cria o usuario(name, email, password)
    }
}

/*-----------------------------------------------*/
/* sempre que possivel, sempre que possivel enviei parametros nomeados
no js - a desestruturação */

function createUserController(data){
    const {name, email, password} = data
    userRepository.create({
        name,
        email,
        password
    })// vc se certifica que esta enviando APENAS esses dados

}
/* mas o codigo não ficou maior? clean code não tem a ver com codigo pequeno */

//prefira sempore receber nas funções objetos, do que parametros jogados
function createUserRoute(body, params){
    //validações

    createUserController(body)
}

//imagine isso em outro arquivo:
createUserRoute({name, email, password}, {id: 1})

//quer chamar sem passar o body:
createUserRoute(null, {id: 1})//mas oque é null ??

//receba sempre que possivel parametros nomeados, exemplo CORRETO:
function createUserRoute({body, params}){
    //validações

    createUserController(body)
}
createUserRoute({
    body: {name, email, password},
    params: {id: 1}
})
//se não quero enviar o body:
createUserRoute({
    params: {id: 1}
})
//agora eu sei oque esta sendo enviado mesmo estando em outro arquivo

//sempre que possivel receba parametros e funçoes em formato de objeto
//e devolva informaçoes da função em formato de objeto, mais extensivel, mais facil de ler

    
   
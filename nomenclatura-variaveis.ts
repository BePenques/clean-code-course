//Nomenclatura de variáveis

const users = ['Diego', 'mayk', 'Rodrigo']

const filtered = users.filter(u =>{
    return u.startsWith('D')
});

/* 1º regra - evite diminutivos - não existe U:
 filtered não significa nada, de um nome descritivo 
 mesmo que grande */

const usersStartingWithLetterD = users.filter(user =>{
    return user.startsWith('D')
});

/* evite nomes genericos, 
como data, response, list, args, params */

function getUsers(){
    const data = getUsersFromDatabase();

    return data;

}
/* troque data por user -
 data é indescritivo, não semantico */
 function getUsers(){
    const user = getUsersFromDatabase();

    return user;

}
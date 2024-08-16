/*quando separar funcionalidade em um novo componente?

1. quando eu tenho algo repetitivo

2. quando eu consigo isolar algo do seu contexto(sem prejudicar o comportamento original)

o melhor momento de separar um componente, é quando a 
gente olha pro codigo, e percebe que tem alguma:
variavel, função, hook useEffect, etc ..e ele 
esta totalmente associado a alguma parte do codigo

*/

/* 
componente puro:
componente que não depende de todo o contexto/informações externas para funcionar,
precisa apenas receber como parametro uma função
e pode funcionar de qualquer lugar do codigo

quando for separar um componente cuidado para 
não levar junto com ele muita lógica, que torna esse 
compoente inutilizavel em outros contextos da sua aplicação

como saber se esta correto? tente mover o componente de um lugar da aplicação prara outro, se continuar funcionando normalmente, esta certo
*/

/* 
funções e eventos:

handle, on - prefixos na padronização

handle - sempre que criar uma func dentro do componente,
e essa função for disparada de um evento do usuario, como onclick, submit

ex: handleCreateNewTodo()

on - quando passar uma func do componente filho para o pai
ex: onCreateNewTodo()
*/
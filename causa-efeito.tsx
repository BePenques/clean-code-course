// sempre nomear as variaveis pela causa, nunca pelo efeito

efeito:
function Button(){
    const isButtonDisabled = true;

    return (
        <button disabled={isButtonDisabled}>
            <span></span>
            {isButtonDisabled ? 'Carregando' : 'Enviar'}
        </button>
    )
}

causa:
function Button(){
    const isFormSubmitting = true;

    return (
        <button disabled={isFormSubmitting}>
            <span></span>
            {isFormSubmitting ? 'Carregando' : 'Enviar'}
        </button>
    )
}
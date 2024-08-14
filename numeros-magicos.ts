/*numeros magicos são calculos no codigo, dificeis de serem entendidos por uma 
pessoa que nunca deu manutenção ou não sabe o contexto.
muito comum em comparação de datas, criação de intervalos, etc */

//exemplo simples

//setTimeout, setInterval
//2592000000 é 30 dias em milisegundos
setTimeout(()=>{


},2592000000);//numero magico -  como a pessoa irá saber 

//maneira melhor:
const interval_30_days = 1000 * 60 * 60 * 24 * 30;

setTimeout(()=>{


},interval_30_days);



//definir no nome do parametro, o formato que o valor esta - centavos, porcentagem
function calculateDiscount(priceInCents, discountAmountInPercentage){

}

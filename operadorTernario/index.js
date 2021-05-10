// ? : -> Operadores ternários
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';


const corUsuário = null;
const corPadrao = corUsuário || 'Preta';

console.log(nivelUsuario, corPadrao);
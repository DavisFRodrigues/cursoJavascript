/*
Operadores Lógicos

&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retorna true
|| -> OR -> OU
!  -> NOT -> NÃO

const expressaoNot = true ! true ;
console.log(expressaoNot);

*/

const expressaoAnd = true && true ;
console.log(expressaoAnd);

const expressaoOr = true || true ;
console.log(expressaoOr);


const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '1234567'
console.log(vaiLogar);

console.log(!!!false);
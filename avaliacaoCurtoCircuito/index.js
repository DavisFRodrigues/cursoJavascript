/*
&& -> false && true -> false
|| -> true || false -> vai retornar o valor verdadeiro

FALSY
false
0
'' "" ``
null / undefined
NaN
*/

console.log('Luis' && 'Maria');/*Neste caso ele retorna o último valor checado, no caso ao lado Maria */

console.log('Luis' && '' &&'Maria');/* Neste caso vai retorna o valor vazio por causa do false */

function falaOi(){
    return 'oi';
}

let vaiExecutar = 'João';

console.log(vaiExecutar && falaOi());




console.log(0 || false || null || 'Luiz Otávio' || true); /* Vai retornar o primeiro valor verdadeiro encontrado */


const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'pretro'; /* Vai retornar vermelho uma vez que OU retorno o primeiro valor verdadeiro */

console.log(corPadrao);


const a = 0;
const b = null;
const c = 'false'; /* Vai retorna este valor por ser uma string e o javascript entender como verdadeiro, se estivesse em as aspas simples o retonro seria NaN, por ser o últmo valor falso avaliado*/
const d = false;
const e = NaN;

console.log(a|| b || c || d || e);
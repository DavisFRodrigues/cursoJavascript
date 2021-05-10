


const treHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + treHoras + umDia); // 01/01/1970 Timestamp unix ou época unix ***Marco zero****

const data = new Date(2019,3,20,15,14,27); // O mês em javascript começa em 0, no exemplo o número 3 representa o mês de abril (a, m , d, h, M, s, ms)

const data = new Date('2021-05-20 17:54:59'); // Geralmente as data vem neste formato

console.log('Dia',data.getDate());
console.log('Mês',data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da Semana', data.getDay()); // 0 - Domingo, 6 Sábado
console.log(Date.now()); // Retorna a data atual em milesegundos a partir do timestamp

//console.log(data.toString());

function zeroAesquerda(num){
    
    return num >=10 ? num : `0${num}`;
}

function formataData(data){

    const dia = zeroAesquerda(data.getDate());
    const mes = zeroAesquerda(data.getMonth() + 1);
    const ano = zeroAesquerda(data.getFullYear());
    const hora = zeroAesquerda(data.getHours());
    const min = zeroAesquerda(data.getMinutes());
    const seg = zeroAesquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
    

}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
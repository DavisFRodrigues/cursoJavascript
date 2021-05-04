/*

Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite

*/


//IF pode ser utilizado sozinho
//Sempre que utilizo a palavra else, preciso de um if antes
//Pode ser utilizado vários else e ifs


const hora = 13; 

if (hora >=0  && hora <= 11){
    console.log('Bom dia!');
} else if(hora >= 12 && hora <= 17){
    console.log('Boa tarde!');
}else if(hora >= 18 && hora<= 23){
    console.log('Boa noite!');
}else{
    console.log('Olá');
}

const numero = 10;

if(numero >= 0 && numero <= 5){
    console.log('O número esta entre 0 e 5');

}else{
    console.log('O número Não está entre 0 e 5')
}
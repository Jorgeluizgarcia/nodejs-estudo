const listaArgumentos = process.argv.slice(2);

console.log('----------------Execultando FOR-------------------')
for (let controladorFor = 0; controladorFor < listaArgumentos.length; controladorFor++){
    console.log(`Posição ${controladorFor} valor lido = ${listaArgumentos[controladorFor]}`);
}

console.log('---------------Execultando WHILE------------------')
let controladorWhile = 0;
while(controladorWhile < listaArgumentos.length){
    console.log(`Posição ${controladorWhile} Valor lido = ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;
}

console.log('--------------Execultando DO WHILE--------------------')
let controladorDoWhile = 0;
do{
    console.log(`Posição ${controladorDoWhile} Valor lido = ${listaArgumentos[controladorDoWhile]}`);
    controladorDoWhile++;
}while(controladorDoWhile < listaArgumentos.length)

console.log('---------------Execultando FOR OF------------------')
let controladorForOf = 0;
for(const argumento of listaArgumentos){
    console.log(`Posição ${controladorForOf} Valor lido = ${argumento}`);
    controladorForOf++;
}
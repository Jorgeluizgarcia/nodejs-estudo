const readLine = require ('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('A empresa vai checar se você é maior de 18 anos e tem a habilitação para conduzir o veiculo');
console.log('Além disso vai verificar se você não tem nenhuma multa pendente e ver se sua carteira está sendo caçada');

readLine.question('Qual o ano do seu nascimento ', ano =>{
    if(ano > 2004){
        console.log('voce nao tem 18 anos');
    }
    else {
        readLine.question("Voce tem hbilitacao? (Sim/Nao) ", temhabilitacao => {
            if(!(temhabilitacao.toUpperCase() === 'SIM')){
                console.log('voce nao tem habilitacao para conduzir o carro da empresa');
            }
            else{
                readLine.question("Qual seu nome? ", nome => {
                    switch(nome){
                        case 'Jorge' :
                            console.log('Voce está autorizado para pegar o carro Jorge');
                            break;
                        case 'Joao' :
                            console.log('Voce está autorizado para pegar o carro Joao');
                            break;
                        default:
                            console.log('voce nao tem autorização para conduzir o carro, seu nome não foi identificado na sua habilitcao');
                            break
                    }
                })
            }
        })
    }
})
try {
    const listadeProdutosDisponiveis = [
        'manteiga',
        'pão',
        'café',
        'leite',
        'açucar',
        'queijo',
        'mortadela',
        'ovos',
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const listaDeProdutosSolicitadosDisponiveis = listadeProdutosDisponiveis.filter(produto => {
        return listaDeArgumentos.find(argumento => argumento === produto);
    });
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nos temos: ${produto}`));
    
    listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return !listadeProdutosDisponiveis.find(produto => produto === argumento);
    });
    listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produto nos não temos: ${argumento}`));
    
    listadeProdutosDisponiveis.sort();
    listadeProdutosDisponiveis.forEach(produto => console.log(`Este produto está disponivel: ${produto}`));
}catch(e){
    console.log('Não foi possivel execultar pedido de compra');
}
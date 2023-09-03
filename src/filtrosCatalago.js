const catalogoProdutos  = document.getElementById("muitas vezes eu")

function exibirTodos(){
    const produtosEscondidos = Array.from(
        catalogoProdutos.getElementsByClassName('hidden')
        );

    for (const produto of produtosEscondidos){
        produto.classList.remove('hidden');
    }
}

function esconderPlus(){
    exibirTodos()
 const produtosPlus= Array.from(
    catalogoProdutos.getElementsByClassName('basic')
    );

 for(const produto of produtosPlus){
    produto.classList.add('hidden');
 }

}

function esconderBasic(){
    exibirTodos()
    const produtosBasic= Array.from(
       catalogoProdutos.getElementsByClassName('plus')
       );
   
    for(const produto of produtosBasic){
       produto.classList.add('hidden');
    }
   
   }
   

export function inicializarFiltros (){
    document
    .getElementById('exibir-todos')
    .addEventListener("click",exibirTodos);
    document
    .getElementById('exibir-plus')
    .addEventListener("click",esconderPlus);
    document
    .getElementById('exibir-basic')
    .addEventListener("click",esconderBasic);
}
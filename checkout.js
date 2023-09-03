import { lerLocalStorage } from "./src/utilidades";
import { desenharProdutoSimples,
} from "./src/utilidades";
import { apagarDoLocalStorage } from "./src/utilidades";
import { salvarLocalStorage } from "./src/utilidades";

function desenharProdutosCheckout (){
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
    for (const idProduto in idsProdutoCarrinhoComQuantidade){
     desenharProdutoSimples(
        idProduto, 
        "container-produtos-checkout", 
        idsProdutoCarrinhoComQuantidade[idProduto]
        );
    }
}

function finalizarCompra (evento){
    evento.preventDefault();
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {}
    if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0){
        return
    }   
    const dataAtual = new Date ();
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido: idsProdutoCarrinhoComQuantidade     
    }
    const historicoDePedidos = lerLocalStorage('historico') ?? [];
    const historicoDePedidosAtualizados = [pedidoFeito, ...historicoDePedidos];

    salvarLocalStorage('historico', historicoDePedidosAtualizados);
    apagarDoLocalStorage('carrinho');
    
    window.location.href = './pedidos.html';
}

desenharProdutosCheckout ();

document.addEventListener('submit', (evt) =>finalizarCompra(evt));
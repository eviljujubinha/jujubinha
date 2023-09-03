import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo (){
    for (const produtoCatalago of catalogo) {
        const cartaoJulliana = `<div 
        class="border-solid w-48 m-2 flex flex-col p-1 justify-between shadow-xl shadow-slate-400 rounded-lg group ${produtoCatalago.plus ?  'plus' : 'basic'} id="card-produto-${produtoCatalago.id} >
       <img 
          src="./Projeto TI/${produtoCatalago.nomeImagem}" 
          alt="Funciona porra"
          class= "group-hover:scale-110 duration-300 my-4 rounded-lg"
       />
       <p class="text-sm">${produtoCatalago.marca}</p>
       <p class="text-sm">${produtoCatalago.nome}</p> 
       <p class="text-sm">$${produtoCatalago.preco}</p>
       <button id="adicionar-${produtoCatalago.id}" class="bg-slate-950 text-slate-200 hover:bg-slate-700"
       ><i class="fa-solid fa-cart-plus">
       </i></button>
       </div>`;
       
          document.getElementById("muitas vezes eu").innerHTML +=cartaoJulliana;
    }
    for (const produtoCatalago of catalogo){
        document
        .getElementById(`adicionar-${produtoCatalago.id}`)
        .addEventListener("click", () => adicionarAoCarrinho(produtoCatalago.id));
    }
}
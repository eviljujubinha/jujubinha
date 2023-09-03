export const catalogo = [
    {
     id: "1",
     nome: "Irrestivel e charmosa",
     marca: "Julliana Sexy",
     preco: 168,
     nomeImagem: "Eu 1.jpg",
     plus: false
    },
    {
     id: '2',
     nome: "Muito carinho",
     marca: "Julliana Sexy",
     preco: 210,
     nomeImagem: "eu 2.jpg",
     plus: false
    },
    {
     id: '3',
     nome: "Presentes e boiolagens",
     marca: "Julliana Sexy",
     preco: 321,
     nomeImagem: "eu 3.jpg",
     plus: true
     },
     {
     id: '4',
     nome: "Experiencias ineditas",
     marca: "Julliana Sexy",
     preco: 347,
     nomeImagem: "eu 4.jpg",
     plus: false
     },
     {
       id: '5',
       nome: "Fofa e carinhosa",
       marca: "Julliana Sexy",
       preco: 500,
       nomeImagem: "eu 5.jpg",
       plus: false
     },
     {
       id: '6',
       nome: "Experiencias ineditas, part 2",
       marca: "Julliana Sexy",
       preco: 349,
       nomeImagem: "eu 6.jpg",
       plus: true
     },
     {
       id: '7',
       nome: "Linda desde sempre",
       marca: "Julliana Sexy",
       preco: 200,
       nomeImagem: "eu 7.jpg",
       plus: false
     }, 
     {
       id: '8',
       nome: "Boa com criança",
       marca: "Julliana Sexy",
       preco: 500,
       nomeImagem: "eu 8.jpg",
       plus: true
     },
     {
       id: '9',
       nome: "Extremamente estilosa e atraente",
       marca: "Julliana Sexy",
       preco: 600,
       nomeImagem: "eu 9.jpg",
       plus: true
     },
 ];

 export function salvarLocalStorage (chave, informacao){
  localStorage.setItem(chave, JSON.stringify(informacao));
 }
 export function lerLocalStorage (chave){
  return JSON.parse(localStorage.getItem(chave));
 }

 export function apagarDoLocalStorage (chave){
  localStorage.removeItem(chave)
 }

 export function desenharProdutoSimples (idProduto, idContainerHtml, quantidadeProduto){ 
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutoCarrinho = 
  document.getElementById(idContainerHtml);
  
  const elementoArticle = document.createElement("article");    
  const articleClasses = [
      'flex', 
      'bg-slate-100',
      'border-rounded-lg',
      'p-1', 
      'relative',
      "mb-4,",
      'w-56'
  ];

  for (const articleClass of articleClasses){
      elementoArticle.classList.add(articleClass);
  }
  
  const cartaoProdutoCarrinho = `
  <img src="./Projeto TI/${produto.nomeImagem}" 
  alt="gostosa" 
  class="h-24 rounded-lg">
  <div class="py-2 px-2 flex flex-col justify-between"> 
    <p class="text-sm">${produto.nome}</p>
    <p class="text-slate-400 text-xs">Importância: S</p>
    <P class="text-green-600 text-lg">$${produto.preco}</P>
  </div>
 <div class= "flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
      <p id= "quantidade-${produto.id}" class= "ml-2">${quantidadeProduto}</p>
 </div>`;

 elementoArticle.innerHTML = cartaoProdutoCarrinho;
containerProdutoCarrinho.appendChild (elementoArticle);

}
import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalago";
import { atualizarPrecoCarrinho, 
         inicializarCarrinho, 
         renderizarCarrinho } from "./src/menuCarrinho";


renderizarCatalogo ();
inicializarCarrinho ();
renderizarCarrinho ();
atualizarPrecoCarrinho ();
inicializarFiltros();   
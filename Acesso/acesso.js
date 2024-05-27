const btn = document.querySelector("#btn")

const usuario = document.querySelector(".usuario").value;

const senha = document.querySelector(".senha").value;


function send(){

const usuario = document.querySelector(".usuario").value;

const senha = document.querySelector(".senha").value;

const preencha = document.querySelector("#preencha")

const sucesso = document.querySelector("#sucesso")


if(usuario.length <1 || senha.length <1){
    
    preencha.style.display = ('inline')

    setTimeout(() => {

        preencha.style.display = ('none')
    
        }, 1000);

    return false;
}

if(usuario == "Mariana Mendes" && senha == "110623" 
|| usuario == "mariana mendes" && senha == "110623"
|| usuario == "Mariana" && senha == "110623"
|| usuario == "mariana" && senha == "110623"
|| usuario == "Mariana Reis Mendes" && senha == "110623"
|| usuario == "mariana reis mendes" && senha == "110623"
|| usuario == "Mariana da Julliana" && senha == "110623"){

    sucesso.style.display = ('inline')

    setTimeout(() => {

    location.href = "file:///C:/Users/junio/OneDrive/Documentos/Projetos/eu%20vou%20chorar%20em/Home/home.html";

    }, 500);
    
} else{

    negado.style.display = ('inline')

    setTimeout(() => {

        location.href = "file:///C:/Users/junio/OneDrive/Documentos/Projetos/eu%20vou%20chorar%20em/Error/erro.html";
    
        }, 500);

};


};
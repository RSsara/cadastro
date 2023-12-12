var listaRegistros = {
    ultimoGerado: 0,
    pessoas: [{id:10, nome: "Benedito da Costa", telefone:"11 2525-3636"}],
};
function limparDados (){
    document.getElementById('id').value = '';
    document.getElementById('').value = "";
    document.getElementById('').value = "";
}
function lerBD() {
    const lista = localStorage.getItem("pessoa");
    if (lista) {
        listaRegistros = JSON.parse(lista);
    }
    desenharTabela();
}
function visualizar (pagina, novo= false) {
    document.body.setAttribute("page", pagina);
    if(pagina === "cadastro"){
        if (novo) {
            limparDados();
        }
        document.getElementById("nome"),focus();
    }
}
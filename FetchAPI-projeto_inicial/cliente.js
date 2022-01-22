const informacoesCliente = [
    {
        cpf: 66809433023,
        nome: "Jairo"
    },
    {
        cpf: 66809433023,
        nome: "maria"
    }
]


const corpoTabela = document.querySelector("[data-conteudo-tabela]");


const exibeCliente = (cpf , nome) => {
    const linha = document.createElement("tr");
    const conteudoLinha = 

`

<td>${cpf}</td> 
<td>${nome}</td>
npm 
`

linha.innerHTML = conteudoLinha

return linha

}

informacoesCliente.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
})
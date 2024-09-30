const carregarDiv = cs => {
    const div = document.getElementById("cervejasDiv")
    const itensHtml = cs.map(({ name, alcohol, style, hop, id, uid, brand, yeast, malts, ibu, blg }) => `<div>${name} -- ${alcohol} -- ${style} -- ${hop} -- ${id} -- ${uid} -- ${brand} -- ${yeast} -- ${malts} -- ${ibu} -- ${blg}</div>`)
    div.innerHTML = `${itensHtml.join("\n")}`
    
}

import { criarTabela } from "./tabela.js";

async function carregarCervejas() {
    try {
        let res = await fetch("https://random-data-api.com/api/v2/beers?size=3");
        let cervejas = await res.json();
        
        const colunas = ["name", "alcohol", "style", "hop", "id", "uid", "brand", "yeast", "malts", "ibu", "blg"];
        const tabela = criarTabela(cervejas, colunas);

        const div = document.getElementById("cervejasDiv");
        div.innerHTML = "";
        div.appendChild(tabela);
    } catch (err) {
        document.getElementById("cervejasDiv").innerHTML = "Erro ao carregar as cervejas da API";
    }
}

const botao = document.getElementById("botaoCarregar");
botao.addEventListener("click", carregarCervejas);
function criarTabela(propriedades, colunas) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    colunas.forEach(coluna => {
        const th = document.createElement("th");
        th.textContent = coluna;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    propriedades.forEach(item => {
        const row = document.createElement("tr");
        colunas.forEach(coluna => {
            const td = document.createElement("td");
            td.textContent = item[coluna];
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}

export { criarTabela };
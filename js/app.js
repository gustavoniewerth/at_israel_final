//recuperar os campos do formulário

const campos = [
    document.querySelector('#form-nome'),
    document.querySelector('#form-nasc'),
    document.querySelector('#form-pessoas'),
    document.querySelector('#form-viagem'),
    document.querySelector('#form-local'),
    document.querySelector('#form-email')
]

//recuperando a tabela - será nela que os dados digitados setrão inseridos
const tbody = document.querySelector('tbody');

//recuperar o form - cancelar evento do form - gravar os dados na tabela
document.querySelector('form').addEventListener('submit', function (evento) {
    //cancelar o submit ---AQUI ELE VIROU EVENTO
    evento.preventDefault();

    //criar a linha da tabela
    const tr = document.createElement('tr');

    campos.forEach((campo) => {
        // criar tds para cada elemento do array - pois elas serão inseridas na tr
        const td = document.createElement('td');
        // inserir como conteúdo os valores digitados
        td.textContent = campo.value;
        //inserir a td na tr
        tr.appendChild(td);
    });

    let td = document.createElement('td');
    td.textContent = (Number(campos[2].value)) * 9500;
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = (Number(campos[2].value)) * 33500;
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = (Number(campos[2].value)) * 33500 + (Number(campos[2].value)) * 9500;
    tr.appendChild(td);

    tbody.appendChild(tr);

    // limpar o form
    this.reset();

    //foco  no campo
    campos[0].focus();

});
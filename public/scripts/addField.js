//Procurar o botão 
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField);

//Executar uma ação
function cloneField() {
    //Duplicar os campos
    //o cloneNode com o parâmetro true duplica o elemento e todos os seus filhos, sem o true ele copia apenas a tag (div vazia por exemplo)
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);

    //Pegar todos os campos filhos
    const fields = newFieldContainer.querySelectorAll('input');

    //Percorrer todos os campos e limpar
    //O forEach percorre todo o array
    fields.forEach(function(field) {
        field.value = "";
    });

    //Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}

    
function limparLista() {
    var lista = document.getElementById("itemLista");
    lista.innerHTML = "";
}

function addElemento() {
    var tarefaInput = document.getElementById("tarefa");
    var dataInput = document.getElementById("dataTarefa");
    var tarefaTexto = tarefaInput.value.toUpperCase();
    var dataTexto = dataInput.valueAsDate.toLocaleDateString();
    var lista = document.getElementById("itemLista");
    var li = document.createElement("li");
    li.textContent = dataTexto + " - " + tarefaTexto;
    li.addEventListener("click", toggleConcluida);
    lista.appendChild(li);
    tarefaInput.value = "";
    dataInput.value = "";
}

function toggleConcluida() {
    this.classList.toggle("checked");
}

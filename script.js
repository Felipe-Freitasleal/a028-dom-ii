

function adicionaItem(event) {
    const novoItem = document.createElement("article")
    novoItem.innerHTML = "esse texto aqui"
    const chamarContainer = document.getElementById("container")
    chamarContainer.insertAdjacentElement("beforeend", novoItem)

    novoItem.setAttribute("class", "item")
}

function removeItem(event) {
    // if(event.shiftKey){
    const removerItem = document.querySelector(".item")
    removerItem.classList.remove("item")
    // }
}

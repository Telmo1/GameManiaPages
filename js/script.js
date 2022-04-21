$(document).ready(function() {
    $("#barras").elick(function)
})



function mostrarMenu() {
    let menu = document.getElementById("menu")

    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

function pesquisarNewletter () {
    let pesquisa = document.getElementById("pesquisa").value

    alert (pesquisa)
    console.log(pesquisa)
}

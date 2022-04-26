// $(document).ready(function() {

//     $("#fas").click(function) {

//        if ($("#menu").hasclass("menu-ativo")) {
//            $("#menu").removeClass("menu-ativo")
//        } else {
//            $("#menu").addClass("menu-ativo")
//        }

//     })
// })

// $(document).ready(function() {

//     $("#fas").click(function()
    
//     $("#menu").toggleClass("menu-ativo")
   
//     ){

//  })
    
// $(document).ready(function() {
    
//     let slideAtual = 1;
//     let listaSlides = ["banner-dupla","banner-controle","banner-mario"]

//     setInterval(mudarSlide, 1000)

//     function mudarSlide (){
//         console.log("slide atual",slideAtual);

//         if (slideAtual > 0)
//             $("#carrossel").removeClass(listaSlides[slideAtual - 1])
//     } else if (slideAtual == 0) {
//         $("#carrossel").removeClass(listaSlides[(listaSlides.length) - 1 ])
//     }

//     $("#carrossel").addClass(listaSlides[slideAtual]);

//     slideAtual++

//     if(slideAtual > (listaSlides,length) - 1  ) {
//         slideAtual = 0;
//     }

//     )}

$('.carousel').carousel()

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

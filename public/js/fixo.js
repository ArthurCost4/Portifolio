const responsiveBtn = document.getElementById('responsiveBtn')

function abrirMenu(){
    const menuHeader = document.getElementById('menuHeader')
    menuHeader.classList.toggle('active')
}

responsiveBtn.addEventListener('click', abrirMenu)
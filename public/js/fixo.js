const responsiveBtn = document.getElementById('responsiveBtn')
var count = 1

setInterval(()=>{
    document.getElementById('radio' + count).checked = true;
    count++
    (count > 5) ? count = 1 : count
}, 5000)



function abrirMenu(){
    const menuHeader = document.getElementById('menuHeader')
    menuHeader.classList.toggle('active')
}

responsiveBtn.addEventListener('click', abrirMenu)
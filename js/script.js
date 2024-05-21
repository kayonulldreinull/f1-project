function abrirModalMax() {
    const modal = document.getElementById('janela-modalMax')
    modal.classList.add('abrirModal')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar-btnModal' || e.target.id == 'janela-modalMax')
         modal.classList.remove('abrirModal')   
    })
}

function abrirModalSerg() {
    const modal = document.getElementById('janela-modalSerg')
    modal.classList.add('abrirModal')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar-btnModal' || e.target.id == 'janela-modalSerg')
         modal.classList.remove('abrirModal')   
    })
}

function abrirModalCharl() {
    const modal = document.getElementById('janela-modalCharl')
    modal.classList.add('abrirModal')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar-btnModal' || e.target.id == 'janela-modalCharl')
         modal.classList.remove('abrirModal')   
    })
}
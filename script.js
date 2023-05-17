const paneles = document.querySelectorAll('.panel');

paneles.forEach(panel => {
    panel.addEventListener('click', ()=>{
        removeractive();
        panel.classList.add('active')
    })
});
function removeractive(){
    paneles.forEach(panel=>{
        panel.classList.remove('active')
    })
}
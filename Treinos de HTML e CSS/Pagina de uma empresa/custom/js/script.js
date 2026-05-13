// CHAMANDO A CLASSE BTN MENU 
document.querySelector('.btnmenu').addEventListener('click', function () {
  // SEMPRE QUE CLICAR ELE ADICIONA OU REMOVE
  document.querySelector('#navegacao').classList.toggle('open')
})

//MENU FIXO SCROLL
window.addEventListener('scroll', function(){
  //VERIFICANDO SE O SCROLL NO EIXO Y E MAIOR OU IGUAL A 10
  if (window.scrollY >= 10) {
    // ADICIONA A CLASSE FIXED SCROLL AO ELEMENTO COM ID TOPO
  document.querySelector('#topo').classList.add('fixed-scroll')
}
else{
  // É O OPOSTO
   document.querySelector('#topo').classList.remove('fixed-scroll')
}


}
)
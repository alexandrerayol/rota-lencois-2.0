//responsavel por mostrar e remover o menu mobile.
function showMobileMenu(boolean){
    const mobileMenu = document.querySelector('#mobile-menu');
    const isTrueOpen = mobileMenu.classList.contains('open');

    if(isTrueOpen || boolean){
        mobileMenu.classList.add('close')
        mobileMenu.classList.remove('open')
    }else{
        mobileMenu.classList.add('open')
        mobileMenu.classList.remove('close')
    }
}

//Whatsapp icon 
function showDialogWhatsapp(){
    const dialogBox = document.querySelector('.dialog-box');
    const isOpen = dialogBox.classList.contains('open-wpp');

    if(isOpen){
        dialogBox.classList.add('close-wpp');
        dialogBox.classList.remove('open-wpp');
    }else{
        dialogBox.classList.remove('close-wpp');
        dialogBox.classList.add('open-wpp');
    }
}

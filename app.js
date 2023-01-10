var modalOpen = document.querySelector('.js-zaloBtn')
var modal = document.querySelector('.js-modalZalo')
var modalClose = document.querySelector('.modalZalo__close')

function showModalZalo() {
    modal.classList.add('open')
}

function hideModalZalo() {
    modal.classList.remove('open')
}

modalOpen.addEventListener('click', showModalZalo)

modalClose.addEventListener('click', hideModalZalo)
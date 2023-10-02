const contact = document.querySelector('.Contact');

const Modal = document.querySelector('.modal');

contact.addEventListener('click', function() {
    Modal.classList.add('active')
})

const closeButton = document.querySelector('.close-button')
 
closeButton.addEventListener('click', function() {
    Modal.classList.remove('active')
})
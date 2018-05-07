document.querySelector('.sample-form input[type=submit]')
    .addEventListener('click', sendForm);
    
    
function sendForm(e) {
    e.preventDefault();
    const form = document.querySelector('.sample-form');
    fetch('form', {
        method: 'POST',
        body: new FormData(form)
    });
}
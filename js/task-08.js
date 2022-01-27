const form = document.querySelector('.login-form')
const buttonEl = document.querySelector('button')
const inputs = document.querySelectorAll('input')


form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value
    const password = formElements.password.value
    if (mail === '' || password === '') {
        alert('Все поля должны быть заполнены!')
    } else {
        const dataObj = {
            email: mail,
            password: password
        }
        console.log(dataObj);
         event.currentTarget.reset();
    }
   
})





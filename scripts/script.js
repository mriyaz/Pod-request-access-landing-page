document.addEventListener('DOMContentLoaded', () => {
    //Get reference to the form,input element and error message
    console.log('clicked!')
    const emailInput = document.querySelector('.email');
    const form = document.querySelector('.form');
    const errorMessage = document.querySelector('.error-message');

    //Add an event listener to handle form submission
    form.addEventListener('submit', (event) => {
        if (!emailInput.validity.valid) {
            showError();
            event.preventDefault(); //stop the form submission
        }

    });

    //Add an event listener to the email input for any input event
    emailInput.addEventListener('input', (event) => {
        if (emailInput.validity.valid) {
            if (form.classList.contains('error')) {
                form.classList.remove('error');
            }

            errorMessage.style.display = 'none';
        }
        else{
            showError();
        }

    });

    //Define showError function
    function showError() {
        //valueMissing
        if (emailInput.validity.valueMissing) {
            errorMessage.textContent = 'Oops! Please add your email';
        }
        //typeMismatch
        else if (emailInput.validity.typeMismatch) {
            errorMessage.textContent = 'Oops! Please check your email';
        }

        //tooShort
        else if (emailInput.validity.tooShort) {
            errorMessage.textContent = 'Email is too short'
        }

        //Add the error class to the form
        form.classList.add('error');

        //Display the errorMessage
        errorMessage.style.display = 'block';
    }

});
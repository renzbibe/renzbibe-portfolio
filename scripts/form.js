const form = document.querySelector('.js-contact-form');
const inputs = document.querySelectorAll('.js-name-input, .js-email-input, .js-subject-input, .js-message-input')
const nameInput = document.querySelector('.js-name-input');
const emailInput = document.querySelector('.js-email-input');
const subjectInput = document.querySelector('.js-subject-input');
const messageInput = document.querySelector('.js-message-input'); 
const submitBtn = document.querySelector('.js-form-submit');

const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

inputs.forEach((input) => {
  

  input.addEventListener('keyup', () => {
 
    let inputResult = [];

    for (let i = 0; i < inputs.length; i++) {

      // if (inputs[i].name === 'email') {

      //   if (!emailValidation.test(inputs[i].value)) {

      //     inputs[i].addEventListener('focusout', () => {
      //       inputs[i].classList.add('is-invalid');
      //     })
          
      //     inputResult.push(true); 
      //   } else {
      //     inputs[i].addEventListener('focusout', () => {
      //       inputs[i].classList.remove('is-invalid');
      //     })

      //     inputResult.push(false); 
      //   }
      //   continue;
      // }

      if (inputs[i].value.length === 0 || inputs[i].value.length === null) {
        inputResult.push(true); 
      } else {

        if (inputs[i].name === 'email') {

          if (!emailValidation.test(inputs[i].value)) {
            inputResult.push(true); 
            continue;
          } 

        }
        inputResult.push(false); 
      }
    }

    console.log(inputResult);

    if (inputResult.every(areAllValid)) {
      submitBtn.disabled = false; 
    } else {
      submitBtn.disabled = true; 
    }

  })
})

emailInput.addEventListener('focusout', () => {
  if (emailInput.value.length > 0) {
    if (!emailValidation.test(emailInput.value)) {
      emailInput.classList.add('is-invalid');
    } else {
      emailInput.classList.remove('is-invalid');
    }
  }
})

form.addEventListener('submit', (event) => {
  event.preventDefault();
 
  sendEmail(); 

  inputs.forEach((input) => {
    input.value = '';
  })

  submitBtn.classList.add('is-valid');
  setTimeout(() => {
    submitBtn.classList.remove('is-valid'); 
  }, 2000);
})

function sendEmail() {
  let params = {
    name : nameInput.value, 
    email : emailInput.value,
    subject : subjectInput.value, 
    message : messageInput.value
  }

  emailjs.send("service_nrc60km","template_etoj7p9", params).then(function () {
    submitBtn.classList.add('is-valid');
    setTimeout(() => {
      submitBtn.classList.remove('is-valid'); 
    }, 2000);
  }); 
}

function areAllValid(result) {
  return result === false; 
}

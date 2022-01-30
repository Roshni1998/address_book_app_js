window.addEventListener('DOMContentLoaded', (event) => {
    const fullName = document.querySelector('#fullName');
    const textError = document.querySelector('.text-error');
    fullName.addEventListener('input', function(){
        if(fullName.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
          (new AddressBook()).fullName = fullName.value;
          textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const phoneNumber = document.querySelector('#phonenumber');
    const phoneNoError = document.querySelector('.phone-Error');
    phoneNumber.addEventListener('input', function(){
        if(phoneNumber.value.length == 0) {
            phoneNoError.textContent = "";
            return;
        }
        try {
            (new AddressBook()).phoneNumber = phoneNumber.value;
            phoneNoError.textContent = "";
        } catch (e) {
            phoneNoError.textContent = e;
        }
    });

    const zipCode = document.querySelector('#zipcode');
    const codeerror = document.querySelector('.zipcode-error');
    zipCode.addEventListener('input', function(){
        if(zipCode.value.length == 0) {
            codeerror.textContent = "";
            return;
        }
        try {
            (new AddressBook()).zipCode = zipCode.value;
            codeerror.textContent = "";
        } catch (e) {
            codeerror.textContent = e;
        }
    })

});
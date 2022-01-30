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
    });
});

const save = () => {
    try{
        let addressBookData = addPerson();
        console.log(addressBookData);
        createAndUpdateStorage(addressBookData);
    } catch (e){
        return;
    }
}

function createAndUpdateStorage(addressBookData){
    let personContactList = JSON.parse(localStorage.getItem("PersonContactList"));

    if(personContactList != undefined){
        personContactList.push(addressBookData);
    } else {
        personContactList = [addressBookData]
    }
    alert(personContactList.toString());
    localStorage.setItem("PersonContactList", JSON.stringify(personContactList));
}

const addPerson = () => {
    let addressBookData = new AddressBook();
    console.log(addressBookData);
    try{
        addressBookData.fullName = getInputValueById('#fullName');
    } catch(e){
        setTextValue('.text-error', e);
        throw e;
    }

    try{
        addressBookData.phoneNumber = getInputValueById('#phonenumber');
    } catch(e){
        setTextValue('.phone-Error', e);
        throw e;
    }

    addressBookData.address = getInputValueById('#address');
    addressBookData.city = getInputValueById('#city');
    addressBookData.state = getInputValueById('#state');

    try{
        addressBookData.zipCode = getInputValueById('#zipcode');
    } catch(e){
        setTextValue('.zipcode-error', e);
        throw e;
    }
    alert(addressBookData.toString());
    return addressBookData;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
  }
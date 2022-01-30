let addressBookList;

window.addEventListener('DOMContentLoaded', (event) => {
    addressBookList = getAddressBookDataFromStorage();
    document.querySelector('.person-count').textContent = addressBookList.length;
    createInnerHtml();
});

const getAddressBookDataFromStorage = () => {
    return localStorage.getItem('PersonContactList')?
           JSON.parse(localStorage.getItem('PersonContactList')) : [];
}

const createInnerHtml = () => {
    if(addressBookList.length == 0) return;
    const headerHtml = "<th>Fullname</th><th>Address</th><th>City</th>"+
                       "<th>State</th><th>Zip Code</th><th>Phone Number</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    for(const addressBookData of addressBookList){
        innerHtml = `${innerHtml}
        <tr>
            <td>${addressBookData._fullName}</td>
            <td>${addressBookData._phoneNumber}</td>
            <td>${addressBookData._address}</td>
            <td>${addressBookData._city}</td>
            <td>${addressBookData._state}</td>
            <td>${addressBookData._zipCode}</td>
            <td>
                <img id="${addressBookData._id}" onclick="remove(this)" alt="delete"
                    src="../assets/icons/delete-black-18dp.svg">
                <img id="${addressBookData._id}" onclick="update(this)" alt="edit"
                    src="../assets/icons/create-black-18dp.svg"> 
            </td>
        </tr>`;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}
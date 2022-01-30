class AddressBook{
  
    // Getter and Setter method
    get id() { return this._id; }
    set id(id) {
        this._id = id;
    }

    get fullName() { return this._fullName; }
    set fullName(fullName) {
      let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if (nameRegex.test(fullName))
            this._fullName = fullName;
        else throw 'Name is Incorrect!';
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp('^[7-9]{1}[0-9]{9}$')
        if (phoneRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw 'Phone Number should contain exactly 10 digit';
    }

    get address() { return this._address; }
    set address(address) {
        this._address = address;
    }

    get city() { return this._city; }
    set city(city) {
        this._city = city;
    }

    get state() { return this._state; }
    set state(state) {
        this._state = state;
    }

    get zipCode() { return this._zipCode; }
    set zipCode(zipCode) {
        let zipCodeRegex = RegExp('^[1-9]{1}[0-9]{5}$');
        if (zipCodeRegex.test(zipCode))
            this._zipCode = zipCode;
        else throw 'Zip Code should contain exactly 6 digit';
    }

    toString() {
        return "id=" + this.id + ", FullName= " + this.fullName + ", Phone Number= " + this.phoneNumber +
        ", Address=" + this.address + ", City=" + this.city + ", State=" + this.state + 
        ", Zip Code =" + this.zipCode;
    }
}
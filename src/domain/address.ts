export default class Address {
    _street: string;
    _number: number;
    _zipCode: string;
    _city: string;

    constructor(street: string, number: number, zipCode: string, city: string) {
        this._street = street;
        this._number = number;
        this._zipCode = zipCode;
        this._city = city;
    }

}
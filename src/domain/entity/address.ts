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

    public get street(): string {
        return this._street;
    }

    public get number(): number {
        return this._number;
    }

    public get zipCode(): string {
        return this._zipCode;
    }

    public get city(): string {
        return this._city;
    }

}
export default class Product {
    
    private _id: string;
    private _name: string;
    private _price: number;

    constructor(id: string, name: string, price: number) {
        this._id = id;
        this._name = name;
        this._price = price;
        this.validate()
    }

    private validate() {
        if (!this._id) {
            throw new Error("ID cannot be empty");
        }
        if (!this._name) {
            throw new Error("Name cannot be empty");
        }
        if (!this._price) {
            throw new Error("Price cannot be empty");
        }
        if (this._price <= 0) {
            throw new Error("Price must be greater than zero");
        }
    }

    changeName(newName: string) {
       this._name = newName;
       this.validate();
    }

    changePrice(newPrice: number) {
        this._price = newPrice;
    }  

    get price(): number {
        return this._price;
    }

    get name() {
        return this._name;
    }

}
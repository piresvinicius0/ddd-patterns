import Address from "../value-object/address";

export default class Customer {
    private _id: string;
    private _name: string;
    private _address!: Address; 
    private _active: boolean = false;
    private _rewardPoints: number = 0;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    get name(): string {
        return this._name;
    }

    get id(): string {
        return this._id;
    }

    get rewardPoints(): number {
        return this._rewardPoints;
    }

    get address(): Address {
        return this._address;
    }

    changeAddress(address: Address): void {
        this._address = address;
    }

    addAddress(address: Address): void {
        this._address = address;
    }

    addRewardPoints(rewardPoints: number): void {
        this._rewardPoints += rewardPoints;
    }

    activate(): void {
        if (this._address === undefined) {
            throw new Error("Address not set");
        }
        this._active = true;
    }

    deactivate(): void {
        this._active = false;
    }

    changeName(newName: string): void {
        this._name = newName;
        this.validate();
    }

    isActive(): boolean {
        return this._active;
    }
    
    validate() {
        if (this._id.length === 0) {
            throw new Error("ID cannot be empty");
        }

        if (this._name.length === 0) {
            throw new Error("Name cannot be empty");
        }

    }
}
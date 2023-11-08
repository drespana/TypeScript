class SecretPoint {
    constructor( public _x?: number, private _y?: number ) {
    } 

    // properties - read only access to outside/ basic validation
    get x() {
        return this._x
    }

    set x(value) {
        if (value < 0){
            throw new Error('value cannot be less than 0.')
        this._x = value;
        }
    }
}

let secret = new SecretPoint(1,2);
// use PROPERTIES to get X
let x = secret.x;
// use to set
secret.x = 10;
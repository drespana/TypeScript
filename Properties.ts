class SecretPoint {
    constructor( public x?: number, private y?: number ) {
    } 

    // properties - read only access to outside/ basic validation
    get X() {
        return this.x
    }

    set X(value) {
        if (value < 0){
            throw new Error('value cannot be less than 0.')
        this.x = value;
        }
    }
}

let secret = new SecretPoint(1,2);
// use PROPERTIES to get X
let x = secret.X;
// use to set
secret.X = 10;
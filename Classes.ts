
// Create class Point and object point 
// Point has constructors

class Point {

    //structure
    x: number;
    y: number;

    // declaring access modifiers eliminates the need to declare values
    // EX: class Point { constructor( public x?: number, private y?: number ) {} }
    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    //functions
    draw(){
        console.log('X: '+this.x + ', Y: ' + this.y)
    }
}

// making constructor arguments optional(?) makes it 
    // so that they don't have to be provided on intitialization
let point = new Point();
// objects are instances of classes
// interfaces help structure custom types

point.draw();
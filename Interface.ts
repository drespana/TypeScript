
// EXAMPLE of Objects //

// Declare a variable called person with a specific object type annotation
let person: {
    name: string;
    location: string;
    isProgrammer: boolean;
}

// Assign person to an object with all properties and value types
person = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
};

// When defining the signature of an object, 
// you will usually use and INTERFACE 

interface Person {
    name: string;
    location: string;
    isProgrammer: boolean;
}

let person1: Person = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
  };

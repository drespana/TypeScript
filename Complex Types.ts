
// regular enum //
enum Color {
    Red = "Red",
    Orange = "Orange",
    Yellow = "Yellow",
    Green = "Green",
    Blue = "Blue",
    Purple = "Purple",
    White = "White",
    Black = "Black",
}

// use Complex Types //
type ContactName = string;
type ContactBirthDate = Date | number | string
type ContactStatus = "active" | "inactive" | "new"

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
    email?: string;
}

// check birthDate type //
function getBrithDate(contact: Contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    } 
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    } 
    else {
        return contact.birthDate
    }
}

// Use Contact as a Type //
let primaryContact: Contact = {
    id: 12345,
    name:"Jamie Johnson",
    status:"active"
}

type ContactFields = keyof Contact

function getValue<T>(source: T, propertyName: keyof T) {
    return source[propertyName]
}

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

// use type 
type ContactName = string;
type ContactBirthDate = Date | number | string
type ContactStatus = "active" | "inactive" | "new"

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: Date | number | string;
    status?: ContactStatus;
}

// check types
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

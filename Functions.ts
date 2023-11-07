
// Union type and optionial parameters utilized in a function

const add = ( a: number, b: number, c?: number | string ) => {
    console.log(c)
    return a+b
}

console.log(add(5,4,"peanut"));
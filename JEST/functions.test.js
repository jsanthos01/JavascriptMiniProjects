const { expect } = require("@jest/globals");
const functions = require("./functions");

test("adds two numbers and gives the correct result", () => {
    expect(functions.sum(1,2)).toBe(3);
})

test("adds two numbers and it shouldnt be 4", () => {
    expect(functions.sum(1,2)).not.toBe(4);
})

test("subtract two numbers and gives the correct result", () => {
    expect(functions.subtract(1,2)).toBe(-1)
})

test("clones an array", () => {
    const array = [1,2,3,4,5]
    //the two arrays are referencing from two different places in memory 
    // expect(cloneArray(array)).toBe(array)
    //this only checks the arrays and not looking at the memory allocations
    expect(functions.cloneArray(array)).toEqual(array)
})

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test("Should be Null", () => {
    expect(functions.isNull()).toBeNull()
})


// toBeFalsy
test("Should be Falsy", () => {
    expect(functions.checkValue(0)).toBeFalsy()
})

test("Create a user object", () => {
    expect(functions.createUser("Jane", "Samuels")).toEqual({
        firstName: "Jane",
        lastName: "Samuels"
    })
})

// Less than Greater than
test("Should be under 1600", () => {
    const load1 = 800;
    const load2 = 600;
    expect(load1 + load2).toBeLessThanOrEqual(1600)
})

// Regex Expressions
test("Check if string has extra characters", () => {
    expect("teami").toMatch(/I/i)
})

// Matchers for Arrays
test("Check if array has a specific value", () => {
    const animals = ["monkey", "donkey", "lion", "aardvark"]
    expect(animals).toContain("aardvark")
})

//Axios Calls - Promises
test("User fetched name should be Leanne Graham", () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(res => {
            expect(res.name).toEqual("Leanne Graham")
        }) 
})


// Axios Calls - Async Await 
test("User fetched name should be Leanne Graham", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual("Leanne Graham") 
})

// Reverse String 
test("Reverse String value should be annaoj", () => {
    //check if string exists
    expect(functions.reverseString("Joanna")).toBeDefined()
    
    //checkif string is equal to given value
    expect(functions.reverseString("Joanna")).toEqual("annaoj")
})


test("Chunck an arr of 6 values with length of 3", () => {
    let chunkedArray = functions.chunkedArray([0,1,2,3,4,5], 3)
    expect(chunkedArray).toEqual([[0,1,2], [3,4,5]])
})
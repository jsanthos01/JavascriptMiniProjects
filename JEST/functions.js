const axios = require("axios")

const functions = {
    sum: (num1, num2) =>  num1 + num2,
    subtract: (num1, num2) =>  num1 - num2,
    cloneArray: (array) =>  [...array],
    isNull: () => null,
    checkValue: x => x,
    createUser: (firstName, lastName) => {
        const user = {
            firstName: firstName,
            lastName: lastName
        }
        return user
    },

    fetchUser: () => axios.get("http://jsonplaceholder.typicode.com/users/1")
        .then(res => res.data)
        .catch( err => console.log(err)),
    
    reverseString: str => str.toLowerCase().split('').reverse().join(''),
    chunkedArray: (arr, len) => {
        let chunkedArr = [];
        // Loop through arr
        arr.forEach(val => {
        // Get last element
            const last = chunkedArr[chunkedArr.length - 1];

            // Check if last and if last length is equal to the chunk len
            if (!last || last.length === len) {
            chunkedArr.push([val]);
            } else {
            last.push(val);
            }
        });

        return chunkedArr;
        
    },
    
    
}

module.exports = functions
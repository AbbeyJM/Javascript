// const names = ["Anna", "Laura", "Josh", "Min", "Karla"];

// const generateMessages = (nameList) => {
//     return nameList.map((name) => {
//         return "Hi " + name + " ! 50% off our best candies for you today!"
//     });
// }

// module.exports = generateMessages;

const namesAndDiscounts = [
{ name: "Anna", discount: 50 }, 
{ name: "Laura", discount: 40 },
{ name: "Josh", discount: 30 }, 
{ name: "Min", discount: 50 },
{ name: "Karla", discount: 60 }
];

const generateMessages = (personObject) => {
    return personObject.map(message)
}

const message = (person) => {
    return "Hi ${person.name}! ${person.discount} off our best candies for you today!"
}

console.log(generateMessages(namesAndDiscounts))

module.exports = generateMessages;
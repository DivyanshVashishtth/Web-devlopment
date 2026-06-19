const user = {
    username: "Divyansh",
    price: "1572",

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        
    }
}

user.welcomeMessage()
user.username = "Ritik"

user.welcomeMessage()

console.log(this);


const chai = () => {
    console.log(this);
    
}

chai()


// const addTwo = (num1 , num2 ) => {
//     return num1 + num2
// }

const addTwo = (num1 , num2) => (num1 + num2)
console.log(addTwo(5,4));

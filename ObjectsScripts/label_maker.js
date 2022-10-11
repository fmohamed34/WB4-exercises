// Exercise 1- Print Address 
function printContact (address){
    console.log(address.name)
    console.log(address.address)
    console.log(address.city + ",", 
    address.state, address.zip)
}

let myInfo = {
    name: "Fatma Mohamed",
    address: "123 Sesame St",
    city: "stone mountain",
    state: "GA",
    zip: "30083",
};

printContact (myInfo);

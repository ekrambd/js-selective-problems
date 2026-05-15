//15. Deep Copy

let obj1 = {
    name: "Ekram",
    address:{
        city: "Dhaka"
    }
};

let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.address.city = "Khulna";

console.log(`Object One city: ${obj1.address.city}`);
console.log(`Object Two city: ${obj2.address.city}`);
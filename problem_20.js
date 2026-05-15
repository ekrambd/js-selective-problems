//20. Shallow Copy

let obj1 = {
    id: 1,
    name: "Ekram",
    address:{
        city: "Dhaka"
    },
};

let obj2 = {...obj1};
obj2.address.city = "Khulna";
console.log(`Object One City: ${obj1.address.city}`);
console.log(`Object Two City: ${obj2.address.city}`);
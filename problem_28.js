//28. Group By Users

var groupBy = function(users){
    let result = {};
    for(user of users){
        let role = user.role;
        if(!result[role]){
            result[role] = [];
        }
        result[role].push(user);
    }
    return result;               
};

const users = [
    { name: "Rahim", role: "admin" },
    { name: "Karim", role: "user" },
    { name: "Sakib", role: "admin" }
];

console.log(groupBy(users));
var Authorization;
(function (Authorization) {
    Authorization[Authorization["ADMIN"] = 0] = "ADMIN";
    Authorization[Authorization["READ_ONLY"] = 1] = "READ_ONLY";
    Authorization[Authorization["AUTHOR"] = 2] = "AUTHOR";
})(Authorization || (Authorization = {}));
var person = {
    name: "Mark",
    age: 25,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
    authorization: Authorization.ADMIN
};
// person.role.push("admin");
// person.role[0] = 10;
var favoriteActivities;
favoriteActivities = ["Sports"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(person.name);

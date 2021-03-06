enum Authorization {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  authorization: number;
} = {
  name: "Mark",
  age: 25,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
  authorization: Authorization.ADMIN
};

// person.role.push("admin");
// person.role[0] = 10;

let favoriteActivities: any[];
favoriteActivities = ["Sports"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(person.name);

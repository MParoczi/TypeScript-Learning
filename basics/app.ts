const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Mark",
  age: 25,
  hobbies: ["Sports", "Cooking"]
};

let favoriteActivities: any[];
favoriteActivities = ["Sports"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(person.name);

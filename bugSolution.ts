function greeter(person: string): string {
  return `Hello, ${person}!`;
}

function greeterArray(people: string[]): string {
  return `Hello, ${people.join(', ')}!`;
}

let user = ["Jane Doe", "John Smith"];
let user2 = "Jane Doe";
console.log(greeter(user2)); // Works!
console.log(greeterArray(user)); // Works!
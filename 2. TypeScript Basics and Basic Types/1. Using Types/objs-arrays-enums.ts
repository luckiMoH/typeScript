// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
// const person = {
//     name: 'Mateusz',
//     age: 30,
//     hobbies: ['sports', 'computer science'],
//     role: [2, 'author'],
// };

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Mateusz',
    age: 30,
    hobbies: ['sports', 'computer science'],
    role: Role.ADMIN
};

console.log(person);

if (person.role === Role.ADMIN) {
    console.log('is admin');
    
}

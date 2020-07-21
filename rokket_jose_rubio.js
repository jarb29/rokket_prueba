
// ##############################
/*
1. Composite function
Write a function called "rokket" which produces the following output when called:
console.log(rokket(2)(5)(3)) // this outputs 30
console.log(rokket(4)(2)(2)) // this outputs 16
console.log(rokket(8)(2)(1)) // this also outputs 16
This function must work for any three integer numbers.
*/
// #############################

// R.) No sabia que se podian agregar numeros fuera de la funcion tendre que investigarlo...





// #############################
/* 
Longest string
Write a function called "rokket" which receives an array with several strings. It must output the longest (character length) string in the array.
Example:
const list = ['best', 'company', 'ever']
console.log(rokket(list)) // this outputs 'company' 
*/
// #############################


// const rokket = (lista) => {

//     let max_value = Math.max.apply(null, lista.map(w => w.length));
//     let max_word = lista.filter((e) => e.length === max_value);
//     return max_word[0]

// };
// const list = ['best', 'company', 'ever']

// console.log(rokket(list))




// #############################
/* 
String repetition
Write a function called "rokket" which receives a string A and an integer N and returns a new string with A repeated N times.
Example:
console.log(rokket('node', 5)) // this outputs 'nodenodenodenodenode'
console.log(rokket('abc', 2)) // this outputs 'abcabc'
*/
// #############################




// const rokket = (str, value) => {
//     let string_rep = str.repeat(value);
//     return string_rep
// };

// console.log(rokket('alex', 5))




// #############################
/* 
4. Only last names
Write a function called "rokket" which receives a list of names from a contact book. Each name is an object consisting of a first name and last name. Return a list that
shows only the last names.
Example:
const contacts = [
{ firstName: 'Juanito', lastName: 'Rokket' },
{ firstName: 'James', lastName: 'Bond' },
{ firstName: 'Harry', lastName: 'Potter' }
]
console.log(rokket(contacts)) // this outputs ['Rokket', 'Bond', 'Potter']
*/
// #############################




// const rokket = (constact) => {
//     const last_names = [ ...new Set(constact.map((cont) => cont.lastName))];
//     return last_names
// };

// const contacts = [
//     { firstName: 'Juanito', lastName: 'Rokket' },
//     { firstName: 'James', lastName: 'Bond' },
//     { firstName: 'Harry', lastName: 'Potter' }
//     ]

// console.log(rokket(contacts))




// #############################
/* 
Unique numbers
Write a function called "rokket" which receives two number arrays of any size. Return a list containing the intersection of the two arrays (all unique numbers in both
arrays).
Example:
console.log(rokket([1, 2, 5], [2, 1, 6])) // this outputs [1, 2, 5, 6]
console.log(rokket([1, 2, 3], [4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]
*/
// #############################



// const rokket = (arr_a, arr_b) => {
//     let new_arr = arr_a.concat(arr_b);
//     const new_arr_filtered = [ ...new Set(new_arr.map((cont) => cont))];
//     return new_arr_filtered
// };

// console.log(rokket([1, 2, 5], [2, 1, 6]))
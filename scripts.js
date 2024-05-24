// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// The forEach method iterate over the names and provinces arrays and log each element to the console
names.forEach((firstName) => console.log(firstName));
provinces.forEach((province) => console.log(province));
/* 
 The forEach it iterate over the names array, but it logs each first name along with the corresponding
 province from the provinces array using the index
 */
 names.forEach((firstName, index) =>
  console.log(`${firstName} (${provinces[index]})`)
);
// Using map method to create a new array provincesUppercase with all the province names converted to uppercase
const provincesUppercase = provinces.map((province) => province.toUpperCase());
console.log(provincesUppercase);

// map method to create a new array nameLength containing the lengths of each first name
const nameLength = names.map((firstName) => firstName.length);
console.log(nameLength);

// logs a sorted version of the provinces array to the console using the sort method
console.log(provinces.sort());

// The filter method is used to create a new array filterOutCape that contains only provinces that do not include the word "Cape"
const filterOutCape = provinces.filter(
  (provinces) => !provinces.includes(`Cape`)
);
console.log(filterOutCape.length);
function countTotalPriceByBrand(data) {
  const result = {};
  for (const item of data) {
    if (result[item.brand]) {
      result[item.brand] += item.price;
    } else {
      result[item.brand] = item.price;
    }
  }
  for (const brand in result) {
    result[brand] = result[brand] + '$';
  }
  return result;
}
const data = [
  {brand: 'nike', price: 100},
  {brand: 'nike', price: 300},
  {brand: 'nike', price: 500},
  {brand: 'adidas', price: 200},
  {brand: 'adidas', price: 50},
  {brand: 'puma', price: 150},
  {brand: 'puma', price: 500}
];

const result = countTotalPriceByBrand(data);
console.log(result);

const items = [
    { name: 'Item 1', price: 30 },
    { name: 'Item 2', price: 10 },
    { name: 'Item 3', price: 50 },
    { name: 'Item 4', price: 20 }
];

items.sort((a, b) => b.price - a.price);

console.log(items);

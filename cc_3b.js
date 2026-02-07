let inventory = [
    {SKU: 101, name: "apple", price: 2.50, stock: 500},
    {SKU: 102, name: "banana", price: 1.25, stock: 1000},
    {SKU: 103, name: "orange", price: 1.75, stock: 750},
    {SKU: 104, name: "grape", price: 3.00, stock: 250}
]

inventory.forEach(item => {
    console.log(`SKU: ${item.SKU}, Name: ${item.name}, Price: $${item.price.toFixed(2)}, Stock: ${item.stock}`);
})

inventory.push({SKU: 105, name: "pear", price: `$2.00`, stock: 600});

let removedItem = inventory.pop();
console.log("Removed item:", removedItem);

inventory[1].price = `$1.00`;
console.log("bananas on sale, 20% off:", inventory[1].price);
inventory[2].stock += 200;
console.log("Oranges restocked to:", inventory[2].stock);


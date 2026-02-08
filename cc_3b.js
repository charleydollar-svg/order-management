let inventory = [
    {SKU: 101, name: "apple", price: 2.50, stock: 500},
    {SKU: 102, name: "banana", price: 1.25, stock: 1000},
    {SKU: 103, name: "orange", price: 1.75, stock: 750},
    {SKU: 104, name: "grape", price: 3.00, stock: 250}
]

inventory.forEach(item => {
    console.log(`SKU: ${item.SKU}, Name: ${item.name}, Price: $${item.price.toFixed(2)}, Stock: ${item.stock}`);
})

inventory.push({SKU: 105, name: "pear", price: 2.00, stock: 600});

let removedItem = inventory.pop();
console.log("Removed item:", removedItem);

inventory[1].price = 1.00;
console.log("bananas on sale, 20% off:", "$" + inventory[1].price.toFixed(2));
inventory[2].stock += 200;
console.log("oranges restocked to:", inventory[2].stock);

let orders = [
    {
    orderId: 1001,
    Items: [
        {SKU: 101, quantity: 10},
        {SKU: 102, quantity: 5}
    ]},
    
    {orderId: 1002, Items: [
        {SKU: 103, quantity: 20},
        {SKU: 104, quantity: 15}
    ]}
]
function processOrder(order) {
    let orderTotal = 0;

    for (let item of order.Items) {
        let inventoryItem = inventory.find(i => i.SKU === item.SKU);

        if (!inventoryItem) {
            return `order ${order.orderId} failed: SKU ${item.SKU} not found`;
        }

        if (inventoryItem.stock < item.quantity) {
            return `order ${order.orderId} failed: insufficient stock for SKU ${item.SKU}`;
        }
    } //validate stock first

    for (let item of order.Items) {
        let inventoryItem = inventory.find(i => i.SKU === item.SKU);
        inventoryItem.stock -= item.quantity;

        let discountedprice = 
        inventoryItem.price * (1 - inventory.discountRate);

        orderTotal += discountedprice * item.quantity;
    } //process the order

    return `order ${order.orderId} processed successfully. Total: $${orderTotal.toFixed(2)}`;
}
orders.forEach(order => {
    let result = processOrder(order);
    console.log(result);
}); //process all orders

//total potential revenue
let totalRevenueValue = inventory.reduce((total, item) => {
    return total + (item.price * (item.stock));
}, 0);
console.log("Total potential revenue:", "$" + totalRevenueValue.toFixed(2));

//identify low stock items
let lowStockItems = inventory.filter(item => item.stock < 300).map(item => item.name);

console.log("Low stock items:", lowStockItems);


//generate price list
let priceList = inventory.map(item => {
    return `${item.name}: $${item.price.toFixed(2)}`;
});
console.log("Price list:", priceList);
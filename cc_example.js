//Task 5

let orders = [
    { id: 101, customer: "Alice", total: 300 },
    { id: 102, customer: "Bob", total: 450 },
    { id: 103, customer: "Alice", total: 200 }
];

function findOrders(orders, orderID) {
    return orders.find(order => order.id === orderID);
}

some_order = findOrders(orders, 101);
console.log(some_order);



//Task 6
let inventory = {
    items: [],
    addItem(name, quantity) {
        this.items.push({ name, quantity });
    },
    removeLatestItem() {
        this.items.pop();
    },
    removeFirstItem() {
        this.items.shift();
    }
};

inventory.addItem("Monitor", 10);
inventory.addItem("Keyboard", 5);
inventory.addItem("Mouse", 3);
console.log(inventory.items);
inventory.removeLatestItem();
console.log(inventory.items);
inventory.removeFirstItem();
console.log(inventory.items);



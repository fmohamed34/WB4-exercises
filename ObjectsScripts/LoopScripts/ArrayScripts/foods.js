let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

    function getMealCost(orders) {
        let sum = 0;

        let numOrders = orders.getMealCost
        for(let i = 0; < numOrders; i++) {
            sum += orders[i].price;
        }
        return sum;
    }

    let mealCost = getMealCost (lunch);
    let totalWithTip = mealCost * 1.2;
    console.log("lunch cost" + totalWithTip.toFixed(2));

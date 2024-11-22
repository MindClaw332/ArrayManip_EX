const products = [
    {
        id: "TECH001",
        name: "Smartphone",
        category: "Electronics",
        price: 599.99,
        stock: 50,
        tags: ["mobile", "communication", "tech"],
        reviews: [
            { user: "Massimo", rating: 4.5, comment: "Great phone!" },
            { user: "Donald", rating: 4.8, comment: "The best features ever" }
        ]
    },
    {
        id: "TECH002",
        name: "Laptop",
        category: "Electronics",
        price: 1299.99,
        stock: 10,
        tags: ["computer", "portable", "tech"],
        reviews: [
            { user: "Alice", rating: 4.2, comment: "Powerful and fast." },
            { user: "John", rating: 4.9, comment: "Perfect for my work!" }
        ]
    },
    {
        id: "HOME001",
        name: "Vacuum Cleaner",
        category: "Home Appliances",
        price: 199.99,
        stock: 25,
        tags: ["cleaning", "home", "appliance"],
        reviews: [
            { user: "Sophia", rating: 4.0, comment: "Does the job well." },
            { user: "Mike", rating: 4.5, comment: "Very effective!" }
        ]
    },
    {
        id: "HOME002",
        name: "Air Fryer",
        category: "Home Appliances",
        price: 79.99,
        stock: 40,
        tags: ["cooking", "kitchen", "appliance"],
        reviews: [
            { user: "Emily", rating: 4.7, comment: "Cooks food perfectly!" },
            { user: "Chris", rating: 4.8, comment: "Healthy cooking made easy." }
        ]
    },
    {
        id: "TOY001",
        name: "Action Figure",
        category: "Toys",
        price: 29.99,
        stock: 100,
        tags: ["toys", "children", "action figure"],
        reviews: [
            { user: "Liam", rating: 5.0, comment: "My son loves it!" },
            { user: "Olivia", rating: 4.6, comment: "Great quality." }
        ]
    },
    {
        id: "CLOTH001",
        name: "Winter Jacket",
        category: "Clothing",
        price: 89.99,
        stock: 20,
        tags: ["clothing", "winter", "fashion"],
        reviews: [
            { user: "James", rating: 4.3, comment: "Warm and stylish." },
            { user: "Mia", rating: 4.8, comment: "Perfect fit!" }
        ]
    }
    // ... add more products as needed
];

// Tasks:
// 1. Create a function to add a new product
function AddProduct(id, name, category, price, stock, tags, reviews) {
    const newProduct = {
        id: id,
        name: name,
        category: category,
        price: price,
        stock: stock,
        tags: tags,
        reviews: reviews
    }

    products.push(newProduct);
}
// 2. Implement a search function by category
function SearchByCategory(categoryInput) {
    let searchResult = products.filter(product => product.category === categoryInput);
    return searchResult;
}

// console.log(SearchByCategory("Electronics"));
// 3. Calculate average product rating

// 4. Find products with low stock (less than 10)
let lowStock = products.filter((product => product.stock <= 10))
console.log(lowStock);

// 5. Create a discount function that applies 10% off to specific categories
function DiscountCategory(category) {
    let DiscountArray = products.filter((product) => product.category === category)
    DiscountArray.forEach(Element => {
        Element.price *= 0.9;
    })
    return DiscountArray;
}

console.log(DiscountCategory("Electronics"))
// 6. Generate a report of top-rated products
let characters = [
    {
        name: "Mother",
        image: "",
        locationX: 200,
        locationY: 300,
        inventory: []
    },
    {
        name: "Child",
        image: "assets/Child character down.png",
        locationX: 500,
        locationY: 300,
        inventory: []
    }
];

let ingredientsAvailable = [
    ["Canned Tomatoes", 0, "cans"], //name, quantity, units 
    ["Onion", 0, "pieces"],
    ["Garlic", 0, "pieces"],
    ["Vegetable Broth", 0, "cup"],
    ["Rice", 0, "cups"],
    ["Canned Tuna", 0, "cans"],
    ["Cucumbers", 0, "pieces"],
    ["Green Onions", 0, "pieces"],
    ["Mayonise", 0, "tablespoons"],
    ["Sriracha Sauce", 0, "tablespoons"],
    ["Bananas", 0, "pieces"],
    ["Flour", 0, "cups"],
    ["Sugar", 10, "cups"],
    ["Butter", 10, "cups"],
    ["Eggs", 12, "pieces"],
    ["Sesame Seeds", 100, "grams"],
    ["Oil", 10, "cup"],
    ["Salt", 1000, "grams"],
    ["Pepper", 1000, "grams"],
    ["Baking Soda", 100, "grams"],
    ["Vanilla Extract", 3, "cups"]
];

const recipes = [
    {
        name: "Tomato Soup",
        requiredIngredients: 
        [
            ["Canned Tomatoes", 2, "cans"], //name, quantity, units 
            ["Onion", 1, "pieces"],
            ["Garlic", 3, "pieces"],
            ["Vegetable Broth", 1, "cup"],
            ["Salt", 1, "pinch"],
            ["Pepper", 1, "pinch"]
        ],
        time: 30, //in minutes
        image: "",
        steps: []
    },
    {
        name: "Tuna Fried Rice",
        requiredIngredients: 
        [
            ["Rice", 2, "cups"],
            ["Canned Tuna", 2, "cans"],
            ["Cucumbers", 1, "pieces"],
            ["Green Onions", 4, "pieces"],
            ["Mayonaise", 3, "tablespoons"],
            ["Sriracha Sauce", 2, "tablespoons"],
            ["Sesame Seeds", 1, "tablespoons"],
            ["Oil", 2, "tablespoons"],
            ["Salt", 1, "pinch"],
            ["Pepper", 1, "pinch"]
        ],
        time: 20,
        image: "",
        steps: []
    },
    {
        name: "Banana Bread",
        requiredIngredients: 
        [
            ["Bananas", 3, "pieces"],
            ["Flour", 2, "cups"],
            ["Sugar", 0.75, "cups"],
            ["Butter", 0.3, "cups"],
            ["Eggs", 1, "pieces"],
            ["Baking Soda", 1, "teaspoons"],
            ["Salt", 0.5, "pinch"],
            ["Vanilla Extract", 1, "teaspoons"]
        ],
        time: 45,
        image: "",
        steps: []
    },
];

let appliances = [
    {
        name: "Stove",
        image: "",
        locationX: 650,
        locationY: 100
    },
    {
        name: "Sink",
        image: "",
        locationX: 100,
        locationY: 250
    },
    {
        name: "Oven",
        image: "",
        locationX: 650,
        locationY: 250
    },
    {
        name: "Fridge",
        image: "",
        locationX: 100,
        locationY: 100
    },
    {
        name: "Toaster",
        image: "",
        locationX: 500,
        locationY: 100
    },
    {
        name: "Cutting Board",
        image: "",
        locationX: 250,
        locationY: 450
    },
    {
        name: "Island",
        image: "",
        locationX: 350,
        locationY: 250
    },
    {
        name: "Microwave",
        image: "",
        locationX: 500,
        locationY: 250
    },
    {
        name: "Bowl",
        image: "",
        locationX: 350,
        locationY: 450
    },
    {
        name: "Plate",
        image: "",
        locationX: 450,
        locationY: 450
    },
    {
        name: "Tray",
        image : "",
        locationX: 550,
        locationY: 450
    }
];


/* Steps:
action:
time:
image:
*/
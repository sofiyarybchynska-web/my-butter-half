let characters = [
    {
        name: "Mother",
        image: null,
        locationX: 250,
        locationY: 600,
        width: 250*1.5,
        height: 275*1.5,
        inventory: null
    },
    {
        name: "Child",
        image: null,
        locationX: 500,
        locationY: 600,
        width: 340,
        height: 400,
        inventory: null
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
        image: null,
        locationX: 390,
        locationY: 170,
        width: 300,
        height: 140
    },
    {
        name: "Sink",
        image: null,
        locationX: 1050,
        locationY: 160,
        width: 340,
        height: 300
    },
    {
        name: "Oven",
        image: null,
        locationX: 250,
        locationY: 310,
        width: 700,
        height: 150
    },
    {
        name: "Fridge",
        image: null,
        locationX: 1500,
        locationY: 100,
        width: 500,
        height: 360
    },
    {
        name: "Toaster",
        image: null,
        locationX: 1500,
        locationY: 140,
        width: 135,
        height: 120
    },
    {
        name: "Cutting Board",
        image: null,
        locationX: 750,
        locationY: 190,
        width: 200,
        height: 100
    },
    {
        name: "Side Cupboard",
        image: null,
        locationX: 40,
        locationY: 310,
        width: 175,
        height: 700
    },
    {
        name: "Island",
        image: null,
        locationX: 860,
        locationY: 550,
        width: 720,
        height: 400
    },
    {
        name: "Plate",
        image: null,
        locationX: 70,
        locationY: 630,
        width: 130,
        height: 80
    },
    {
        name: "Tray",
        image: null,
        locationX: 900,
        locationY: 720,
        width: 170,
        height: 90
    },
    {
        name: "Pan",
        image: null,
        locationX: 60,
        locationY: 300,
        width: 200,
        height: 110
    }
];

/*
{
        name: "Bowl",
        image: null,
        locationX: 70,
        locationY: 750,
        width: 130,
        height: 80
    },
    {
        name: "Pot",
        image: null,
        locationX: 45,
        locationY: 450,
        width: 170,
        height: 120
    },
*/


const slots = [
    {
        name: "Stove Burner",
        image: null,
        locationX: 420,
        locationY: 190,
        width: 170,
        height: 120
    },
    {
        name: "Bowl Place",
        image: null,
        locationX: 60,
        locationY: 750,
        width: 150,
        height: 80
    },
    {
        name: "Pot Place",
        image: null,
        locationX: 60,
        locationY: 460,
        width: 150,
        height: 110
    },
    {
        name: "Cutting Board Place",
        image: null,
        locationX: 750,
        locationY: 190,
        width: 210,
        height: 110
    },
    {
        name: "Sink Place",
        image: null,
        locationX: 1230,
        locationY: 190,
        width: 155,
        height: 110
    },
    {
        name: "Fridge Place",
        image: null,
        locationX: 1750,
        locationY: 200,
        width: 120,
        height: 90
    },
    {
        name: "Tray Place",
        image: null,
        locationX: 900,
        locationY: 720,
        width: 170,
        height: 80
    }
];
// empty bowl, pot place, pot with tomato soup, filled cutting board, onions and garlic bowls, canned tomatoes, finished tomato soup


/* Steps:
action:
time:
image:
*/

/*
render: empty bowl, pot place, pot with tomato soup, filled cutting board, onions and garlic bowls, canned tomatoes, finished tomato soup
let render = [1,1,0,0,0,0,0]
*/
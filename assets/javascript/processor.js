let surveyResults = [
    {
        "q": {
            "question": "What is your name?",
            "options": "",
            "answer": "",
        }
    },
    {
        "q": {
            "question": "How old are you?",
            "options": ["18-24", "25-34", "35-44", "45-54", "55+"],
            "answer": "18-24",
        },
    },
    {
        "q": {
            "question": "How often do you workout?",
            "options": ["0", "1-2/ Week", "3-4/ Week"],
            "answer": "1-2/ Week",
        }
    },
    {
        "q": {
            "question": "How often do you eat a balanced meal?",
            "options": ["0", "1 meal/ day", "2meals/ day"],
            "answer": "1 meal/ day",
        }
    },
    {
        "q": {
            "question": "On Average, how many cups of water do you drink per day?",
            "options": ["0", "1-2", "3-5"],
            "answer": "3-5",
        }
    },
    {
        "q": {
            "question": "On Average, how many hours of sleep do you get per night?",
            "options": ["1-4", "5-6"],
            "answer": "1-4",
        }
    },
    {
        "q": {
            "question": "How often to do you feel tired/fatigued?",
            "options": ["Rarely", "Sometimes", "Often", "All the time"],
            "answer": "All the time",
        }
    },
    {
        "q": {
            "question": "How often do you feel stressed?",
            "options": ["Rarely", "Sometimes", "Often", "All the time"],
            "answer": "Often",
        }
    },
    {
        "q": {
            "question": "How often do you have trouble focusing?",
            "options": ["Rarely", "Sometimes", "Often", "All the time"],
            "answer": "Sometimes",
        }
    },
    {
        "q": {
            "question": "How often do you get at least 20+ minutes of sun per day?",
            "options": ["Never", "Rarely", "Sometimes", "Often"],
            "answer": "Never",
        }
    },
    {
        "q": {
            "question": "How would you descride your mood?",
            "options": ["'(", ":(", ":|", ":)"],
            "answer": ":(",
        }
    },
    {
        "q": {
            "question": "Are you looking to lose weight?",
            "options": ["Yes", "No"],
            "answer": "No",
        }
    },
    {
        "q": {
            "question": "How many bowel movements do you have per day?",
            "options": ["0", "1", "2"],
            "answer": "1",
        }
    },
    {
        "q": {
            "question": "Do you every feel gassy/bloated?",
            "options": ["Rarely", "Sometimes", "Often", "All the time"],
            "answer": "All the time",
        }
    },
    {
        "q": {
            "question": "Do dairy products upset your stomach?",
            "options": ["Rarely", "Sometimes", "Often", "All the time"],
            "answer": "Often",
        }
    },
    {
        "q": {
            "question": "Are you worried about hair loss?",
            "options": ["Yes", "No"],
            "answer": "Yes",
        },
    }
]

let recKindOfProds = [];

let suppChart = [
    {
        "q": {
            "question": "What is your name?",
            "options": "",
            "products": []
        }
    },
    {
        "q": {
            "question": "How old are you?",
            "options": ["18-24", "25-34", "35-44", "45-54", "55+"],
            "products": [["Iodine"], ["Iodine"], ["Iodine", "Tumeric"], ["Iodine", "Tumeric"], ["Iodine", "Tumeric"]]
        }
    },
    {
        "q": {
            "question": "How often do you workout?",
            "options": ["0", "1-2/ Week", "3-4/ Week", "5+ Week"],
            "products": [["Vitamin B12"], ["Vitamin B12"], ["Vitamin B12", "Tumeric"], ["Tumeric"]]
        }
    },
    {
        "q": {
            "question": "How often do you eat a balanced meal?",
            "options": ["0", "1 meal/ day", "2meals/ day"],
            "products": [["Laxative", "Probiotics", "Veganzyme"], ["Laxative", "Probiotics", "Veganzyme"], ["Laxative", "Probiotics", "Veganzyme"]]
        }
    },
    {
        "q": {
            "question": "On Average, how many cups of water do you drink per day?",
            "options": ["0", "1-2", "3-5"],
            "products": [["Laxative"], ["Laxative"], ["Laxative"]]
        }
    },
    {
        "q": {
            "question": "On Average, how many hours of sleep do you get per night?",
            "options": ["1-4", "5-6"],
            "products": [["Iodine"], ["Iodine"]]
        }
    },
    {
        "q": {
            "question": "How often to do you feel tired/fatigued?",
            "options": ["Rarely", "Sometimes", "Often", "All the time"],
            "products": [["Laxative", "Vitamin B12", "Iodine", "Livatrex", "Ginseng"], ["Laxative", "Vitamin B12", "Iodine", "Livatrex", "Ginseng"], ["Laxative", "Vitamin B12", "Iodine", "Livatrex", "Ginseng"], ["Laxative", "Vitamin B12", "Iodine", "Livatrex", "Ginseng"]]
        }
    },
    {
        "q": {
            "question": "How often do you feel stressed?",
            "options": ["Rarely", "Sometimes", "Often", "All the time"],
            "products": [["Laxative", "Vitamin B12", "Vitamin D", "Ginseng"], ["Laxative", "Vitamin B12", "Vitamin D", "Ginseng"], ["Laxative", "Vitamin B12", "Vitamin D", "Ginseng"], ["Laxative", "Vitamin B12", "Vitamin D", "Ginseng"]],
        }
    },
    {
        "q": {
            "question": "How often do you have trouble focusing?",
            "options": ["Rarely", "Sometimes", "Often", "All the time"],
            "products": [["Iodine", "Livatrex", "Ginseng"], ["Iodine", "Livatrex", "Ginseng"], ["Iodine", "Livatrex", "Ginseng"], ["Iodine", "Livatrex", "Ginseng"]],
        }
    },
    {
        "q": {
            "question": "How often do you get at least 20+ minutes of sun per day?",
            "options": ["Never", "Rarely", "Sometimes", "Often"],
            "products": [["Vitamin D"], ["Vitamin D"], ["Vitamin D"], ["Vitamin D"]]
        }
    },
    {
        "q": {
            "question": "How would you descride your mood?",
            "options": ["'(", ":(", ":|", ":)"],
            "products": [["Laxative", "Vitamin B12", "Iodine", "Vitamin D", "Ginseng"], ["Laxative", "Vitamin B12", "Iodine", "Vitamin D", "Ginseng"], ["Laxative", "Vitamin B12", "Iodine", "Vitamin D", "Ginseng"], ["Laxative", "Vitamin B12", "Iodine", "Vitamin D", "Ginseng"]]
        }
    },
    {
        "q": {
            "question": "Are you looking to lose weight?",
            "options": ["Yes", "No"],
            "products": [["Laxative", "Iodine"], []]
        }
    },
    {
        "q": {
            "question": "How many bowel movements do you have per day?",
            "options": ["0", "1", "2"],
            "products": [["Laxative", "Probiotics", "Veganzyme"], ["Laxative", "Probiotics", "Veganzyme"], ["Probiotics", "Veganzyme"]]
        }
    },
    {
        "q": {
            "question": "Do you every feel gassy/bloated?",
            "options": ["Rarely", "Sometimes", "Often", "All the time"],
            "products": [["Laxative", "Livatrex", "Probiotics", "Veganzyme"], ["Laxative", "Livatrex", "Probiotics", "Veganzyme"], ["Laxative", "Livatrex", "Probiotics", "Veganzyme"], ["Laxative", "Livatrex", "Probiotics", "Veganzyme"]]
        }
    },
    {
        "q": {
            "question": "Do dairy products upset your stomach?",
            "options": ["Rarely", "Sometimes", "Often", "All the time"],
            "products": [["Laxative", "Veganzyme"], ["Laxative", "Veganzyme"], ["Laxative", "Veganzyme"], ["Laxative", "Veganzyme"]]
        }
    },
    {
        "q": {
            "question": "Are you worried about hair loss?",
            "options": ["Yes", "No"],
            "products": [["Biotin"], []]
        },
    }
]

function sleep(ms) {
    var unixtime_ms = new Date().getTime();
    while (new Date().getTime() < unixtime_ms + ms) { }
}


function calculateProducts() {
    let suppItems = [];
    for (let i = 0; i < surveyResults.length; i++) {
        let answer = surveyResults[i].q.answer;
        for (let m = 0; m < suppChart.length; m++) {
            if (answer !== "") {
                let index = suppChart[m].q.options.indexOf(answer);
                if (index > -1) {
                    let productArray = suppChart[m].q.products[index];
                    try {
                        for (let z = 0; z < productArray.length; z++) {
                            let index1 = suppItems.indexOf(productArray[z]);
                            if (index1 < 0) {
                                suppItems.push(productArray[z]);
                            }
                        }
                    }
                    catch (err) { }
                }
            }
        }
    }
    recKindOfProds = suppItems;
    return true;
}

function getWalmartProducts() {
    let container = $(".productContainer");
    container.empty();
    findWalmartProducts(recKindOfProds, container);
}

function getWalmartStoresByCity(city) {
    let container = $(".productContainer");
    findWalmartStoresByCity(city, container);
}

function getWalmartStoresByZip(zip) {
    let container = $(".productContainer");
    findWalmartStoresByZip(zip, container);
}

function start() {
   calculateProducts();
    getWalmartProducts(); 
    getWalmartStoresByCity("Houston"); 
    getWalmartStoresByZip("77447");  
}


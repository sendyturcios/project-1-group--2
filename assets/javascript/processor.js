
let surveyResults = [];
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
            "options": ["20's", "30's", "40's", "50's", "60+"],
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
            "options": ["3-5", "5-6", "6-8"],
            "products": [["Iodine"], ["Iodine"], ["Iodine"]]
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
    walmartBegin(container);   
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
    surveyResults = getSurveyResultsFromStorage();
    calculateProducts();
    getWalmartProducts();
    //getWalmartStoresByCity("Houston");
 //   getWalmartStoresByZip("77447");
}

$(document).on("click", ".storeButton", function() {
    popUpStoreModal();
})

$(document).on("click", ".research", function() {
    let category = $(this).attr("category");
    let webPage = $(this).attr("webpage");
    console.log($(this));
    console.log(category);
    console.log(webPage);
    sendCategoryToStorage(category);
    //window.location.href = webPage;
})

start();


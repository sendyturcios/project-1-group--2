// apiKey:  8nvceubtr5ha96hcrf8g96r8
// http://api.walmartlabs.com/v1/items?

//http://api.walmartlabs.com/v1/search?apiKey=8nvceubtr5ha96hcrf8g96r8&query=iodine&query=laxative

// http://api.walmartlabs.com/v1/items?apiKey=8nvceubtr5ha96hcrf8g96r8
// http://api.walmartlabs.com/v1/search?apiKey=8nvceubtr5ha96hcrf8g96r8
// http://api.walmartlabs.com/v1/stores?apiKey={apiKey}&zip=77063&format=json
// http://api.walmartlabs.com/v1/stores?apiKey=8nvceubtr5ha96hcrf8g96r8&zip=77063&format=json


//let walmartProducts = [];

let apiKey = "8nvceubtr5ha96hcrf8g96r8";
let prodResponse = [];
let trCounter = 0;
let table = $("<table>");

//----------------------------------------------------------------------------------------------------------

function walmartBegin(container) {
    buildHeader(container);
    findWalmartProducts(recKindOfProds, container);
}

//----------------------------------------------------------------------------------------------------------

function findWalmartProducts(categories, elemTag) {
    for (let i = 0; i < 5; i++) {
        let category = categories[i];
        let query = "https://api.walmartlabs.com/v1/search?apiKey=" + apiKey + "&query=" + category + "&numItems=5" + "&format=json";
        try {
            query = encodeURI(query);
        }
        catch{ }
        $.ajax({
            url: query,
            method: "GET",
            dataType: 'jsonp'
        }).then(function (response) {
            getData(response, category);
        }).catch(function (err) {
            noFoundForCat(category);
        });
        if (i === categories.length - 1) {
            break;
        }
    }
}

//----------------------------------------------------------------------------------------------------------


function buildHeader(elemTag) {
    table = $("<table>");
    trCounter = 0;
    let tr = $("<tr>");
    let category = $("<td>");
    let categoryDiv = $("<div>");
    let product = $("<td>");
    let productDiv = $("<div>");
    let price = $("<td>");
    let priceDiv = $("<div>");
    let options = $("<td>");
    let optionsDiv = $("<div>");
    categoryDiv.addClass("headerDiv");
    categoryDiv.text("Category");
    category.append(categoryDiv);
    productDiv.addClass("headerDiv");
    productDiv.text("Product");
    product.append(productDiv);
    priceDiv.addClass("headerDiv");
    priceDiv.text("Walmart Price");
    price.append(priceDiv);
    optionsDiv.addClass("headerDiv");
    optionsDiv.text("Options");
    options.append(optionsDiv);
    tr.addClass("trHeader");
    tr.append(category).append(product).append(price).append(options);
    table.append(tr);
    elemTag.append(table);
    return true;
}

function getData(response, category) {
    if (response.length === 0) {
        let trM = $("<tr>");
        let noDataM = $("<td>");
        let noDataDivM = $("<div>");
        noDataDivM.text("No data was found from Walmart server");
        noDataM.append(noDataDivM);
        trM.addClass("trChildEven");
        trM.append(noDataM);
        table.append(trM);
    }
    for (let i = 0; i < response.items.length; i++) {
        let item = response.items[i];
        let trM = $("<tr>");
        try {
            trCounter++;
            let categoryM = $("<td>");
            let categoryDivM = $("<div>");
            let productM = $("<td>");
            let productDivM = $("<div>");
            let imgM = $("<img>");
            let nameM = $("<p>");
            let priceM = $("<td>");
            let priceDivM = $("<div>");
            let optionsM = $("<td>");
            let optionsDivM = $("<div>");
            let addToCartButM = $("<a>");
            let findStoresButM = $("<button>");
            let researchDivM = $("<div>");
            let researchButM = $("<a>");
            nameM.text(item.name);
            categoryDivM.addClass("categoryDiv")
            categoryDivM.text(category);
            categoryM.append(categoryDivM);
            imgM.addClass("productImg");
            imgM.attr("src", item.mediumImage);
            priceDivM.addClass("priceDiv");
            priceDivM.text("$" + item.salePrice);
            priceM.append(priceDivM);
            productDivM.addClass("productDiv");
            productDivM.append(imgM).append(nameM);
            productM.append(productDivM);
            addToCartButM.addClass("optionButton");
            addToCartButM.attr("href", item.addToCartUrl);
            addToCartButM.text("Add To Cart");
            findStoresButM.addClass("storeButton");
            findStoresButM.text("Find Stores");
            researchButM.addClass("optionButton");
            researchButM.text("Research " + category);
            researchButM.attr("href", "#");
            researchDivM.attr("webpage", "SupplementMe.html").attr("category", category);
            researchDivM.addClass("research");
            researchDivM.append(researchButM);
            optionsDivM.addClass("optionsDiv");
            optionsDivM.append(addToCartButM).append(findStoresButM).append(researchDivM);
            optionsM.append(optionsDivM);
            if (trCounter % 2 === 0) {
                trM.addClass("trChildEven");
            }
            else {
                trM.addClass("trChildOdd");
            }
            trM.append(categoryM).append(productM).append(priceM).append(optionsM);
            table.append(trM);
        }
        catch (err) { console.log(err); }
    }
    return true;
}

function noFoundForCat(category) {
    let trM = $("<tr>");
    let noDataM = $("<td>");
    let noDataDivM = $("<div>");
    noDataDivM.text("Nothing found for " + category);
    noDataM.append(noDataDivM);
    trM.addClass("trChildEven");
    trM.append(noDataM);
    table.append(trM);
    return true;
}



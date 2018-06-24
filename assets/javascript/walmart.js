// apiKey:  8nvceubtr5ha96hcrf8g96r8
// http://api.walmartlabs.com/v1/items?

// http://api.walmartlabs.com/v1/items?apiKey=8nvceubtr5ha96hcrf8g96r8
// http://api.walmartlabs.com/v1/search?apiKey=8nvceubtr5ha96hcrf8g96r8
// http://api.walmartlabs.com/v1/stores?apiKey={apiKey}&zip=77063&format=json
// http://api.walmartlabs.com/v1/stores?apiKey=8nvceubtr5ha96hcrf8g96r8&zip=77063&format=json


//let walmartProducts = [];

let apiKey = "8nvceubtr5ha96hcrf8g96r8";
let prodResponse = [];

//----------------------------------------------------------------------------------------------------------

function findWalmartStoresByCity(city, elemTag) {
    let query = "http://api.walmartlabs.com/v1/stores?apiKey=" + apiKey + "&city=" + city + "&format=json";
    $.ajax({
        url: query,
        method: "GET",
        dataType: 'jsonp'
    }).then(function (response) {
        displayResponseStores(response, elemTag);
    }).catch(function (err) {
    });
}

//----------------------------------------------------------------------------------------------------------

function findWalmartStoresByZip(zip, elemTag) {
    let query = "http://api.walmartlabs.com/v1/stores?apiKey=" + apiKey + "&zip=" + zip + "&format=json";
    $.ajax({
        url: query,
        method: "GET",
        dataType: 'jsonp'
    }).then(function (response) {
        displayResponseStores(response, elemTag);
    }).catch(function (err) {
    });
}

//----------------------------------------------------------------------------------------------------------

function walmartBegin(container) {    
    buildHeader(container);
    findWalmartProducts(recKindOfProds, container);
}

//----------------------------------------------------------------------------------------------------------

function findWalmartProducts(categories, elemTag) {
    let category = categories[0];
    categories.shift();
    let query = "http://api.walmartlabs.com/v1/search?apiKey=" + apiKey + "&query=" + category + "&format=json";
    $.ajax({
        url: query,
        method: "GET",
        dataType: 'jsonp'
    }).then(function (response) {
        let tempArray = [];
        tempArray.push(category);
        tempArray.push(response);
        prodResponse.push(tempArray);
        let finished = getData(response, category);
        if (categories.length > 0) {
            findWalmartProducts(categories, elemTag);
        }
    }).catch(function (err) {
        if (categories.length > 0) {
            findWalmartProducts(categories, elemTag);
        }
    });
}

//----------------------------------------------------------------------------------------------------------
let trCounter = 0;
let table = $("<table>");

function buildHeader(elemTag) {    
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
            researchButM.attr("webpage", "SupplementMe.html").attr("category", category);
            researchButM.text("Research");
            optionsDivM.addClass("optionsDiv research");
            optionsDivM.attr("webpage", "SupplementMe.html").attr("category", category);
            optionsDivM.append(addToCartButM).append(findStoresButM).append(researchButM);
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


//----------------------------------------------------------------------------------------------------------

function displayResponseStores(response, elemTag) {
    let count = response.length;
    for (let i = 0; i < count; i++) {
        let newDiv = $("<div>");
        let newName = $("<p>");
        let newStreet = $("<p>");
        let newCity = $("<p>");
        let newState = $("<p>");
        let newZip = $("<p>");
        let newPhone = $("<p>");
        let newSunOpen = $("<p>");
        newName.addClass("storeNameP");
        newName.text(response[i].name);
        newStreet.addClass("storeP");
        newStreet.text(response[i].streetAddress);
        newCity.addClass("storeP");
        newCity.text(response[i].city);
        newState.addClass("storeP");
        newState.text(response[i].stateProvCode);
        newZip.addClass("storeP");
        newZip.text(response[i].zip);
        newPhone.addClass("storeP");
        newPhone.text(response[i].phoneNumber);
        newSunOpen.addClass("storeP");
        if (response[i].sundayOpen === true) {
            newSunOpen.text("Open on Sundays");
        }
        else {
            if (response[i].sundayOpen === false) {
                newSunOpen.text("Closed on Sundays");
            }
            else {
                newSunOpen.text("Open on Sundays: Not determined");
            }
        }
        newDiv.addClass("storeDiv");
        newDiv.append(newName).append(newStreet).append(newCity).append(newState).append(newZip).append(newPhone).append(newSunOpen);
        elemTag.append(newDiv);
    }
}


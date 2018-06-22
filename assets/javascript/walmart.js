// apiKey:  8nvceubtr5ha96hcrf8g96r8
// http://api.walmartlabs.com/v1/items?

// http://api.walmartlabs.com/v1/items?apiKey=8nvceubtr5ha96hcrf8g96r8
// http://api.walmartlabs.com/v1/search?apiKey=8nvceubtr5ha96hcrf8g96r8
// http://api.walmartlabs.com/v1/stores?apiKey={apiKey}&zip=77063&format=json
// http://api.walmartlabs.com/v1/stores?apiKey=8nvceubtr5ha96hcrf8g96r8&zip=77063&format=json


//let walmartProducts = [];

let apiKey = "8nvceubtr5ha96hcrf8g96r8";

//----------------------------------------------------------------------------------------------------------

function findWalmartStoresByCity(city, elemTag) {
    let query = "http://api.walmartlabs.com/v1/stores?apiKey=" + apiKey + "&city=" + city + "&format=json";
    //console.log(query);
    $.ajax({
        url: query,
        method: "GET",
        dataType: 'jsonp'
    }).then(function (response) {
        displayResponseStores(response, elemTag);
        //console.log(response);
    }).catch(function (err) {
        //return "error";
        //console.log(err);
    });
}

//----------------------------------------------------------------------------------------------------------

function findWalmartStoresByZip(zip, elemTag) {
    let query = "http://api.walmartlabs.com/v1/stores?apiKey=" + apiKey + "&zip=" + zip + "&format=json";
    //console.log(query);
    $.ajax({
        url: query,
        method: "GET",
        dataType: 'jsonp'
    }).then(function (response) {
        displayResponseStores(response, elemTag);
        //console.log(response);
    }).catch(function (err) {
        //return "error";
        //console.log(err);
    });
}

//----------------------------------------------------------------------------------------------------------

function findWalmartProducts(products, elemTag) {
    let product = products[0];
    products.shift();
    let query = "http://api.walmartlabs.com/v1/search?apiKey=" + apiKey + "&query=" + product + "&format=json";
    //console.log(query);
    $.ajax({
        url: query,
        method: "GET",
        dataType: 'jsonp'
    }).then(function (response) {
        displayResponseProducts(response, elemTag);
        console.log(response);
        if (products.length > 0) {
            findWalmartProducts(products, elemTag);
        }
    }).catch(function (err) {
        if (products.length > 0) {
            findWalmartProducts(products, elemTag);
        }
        //return "error";
        //console.log(err);
    });
}

// $(document).on("click", "#getProductIdBut", function (event) {
//     event.preventDefault();
//     console.log($("#getProductIdInput").val());
//     //console.log($(this).val());
//     findWalmartProduct($("#getProductIdInput").val());
//     //return false;
// });


//----------------------------------------------------------------------------------------------------------

function displayResponseProducts(response, elemTag) {
    let count = response.items.length;
    for (let i = 0; i < count; i++) {
        let newImg = $("<img>");
        let newPrice = $("<span>")
        newImg.attr("src", response.items[i].mediumImage)
        newPrice.text(response.items[i].salePrice)
        elemTag.append(newImg).append(newPrice);
    }
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


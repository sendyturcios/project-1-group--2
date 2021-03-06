$(document).ready(function () {
    let apiKey = "8nvceubtr5ha96hcrf8g96r8";
    let trCounter = 0;
    let container = $(".productContainer");
    let table = $("<table>");
    //----------------------------------------------------------------------------------------------------------

    function findWalmartStoresByCity(city, elemTag) {
        let query = "https://api.walmartlabs.com/v1/stores?apiKey=" + apiKey + "&city=" + city + "&format=json";
        query = encodeURI(query);
        $.ajax({
            url: query,
            method: "GET",
            dataType: 'jsonp'
        }).then(function (response) {
            displayResponseStores(response, elemTag);
        }).catch(function (err) {
            let error = nothingFound(category)
        });
    }

    //----------------------------------------------------------------------------------------------------------    

    function findWalmartStoresByZip(zip, elemTag) {
        let query = "https://api.walmartlabs.com/v1/stores?apiKey=" + apiKey + "&zip=" + zip + "&format=json";       
            query = encodeURI(query);       
        $.ajax({
            url: query,
            method: "GET",
            dataType: 'jsonp'
        }).then(function (response) {
           displayResponseStores(response, elemTag);
        }).catch(function (err) {
            let error = nothingFound(category);
        });
    }

    //----------------------------------------------------------------------------------------------------------

    function listWalmartStoresByCity(city) {
        container.empty();
        buildStoreHeader(container);
        findWalmartStoresByCity(city, container);
    }

    //----------------------------------------------------------------------------------------------------------

    function listWalmartStoresByZip(zip) {
        container.empty();
        buildStoreHeader(container);
        findWalmartStoresByZip(zip, container);
    }

    //----------------------------------------------------------------------------------------------------------

    function buildStoreHeader(elemTag) {
        table = $("<table>");
        trCounter = 0;
        let tr = $("<tr>");
        let name = $("<td>");
        let nameDiv = $("<div>");
        let street = $("<td>");
        let streetDiv = $("<div>");
        let city = $("<td>");
        let cityDiv = $("<div>");
        let state = $("<td>");
        let stateDiv = $("<div>");
        let zip = $("<td>");
        let zipDiv = $("<div>");
        let phone = $("<td>");
        let phoneDiv = $("<div>");
        let openSundays = $("<td>");
        let openSundaysDiv = $("<div>");
        nameDiv.addClass("headerDiv");
        nameDiv.text("Store Name");
        name.append(nameDiv);
        streetDiv.addClass("headerDiv");
        streetDiv.text("Street");
        street.append(streetDiv);
        cityDiv.addClass("headerDiv");
        cityDiv.text("City");
        city.append(cityDiv);
        stateDiv.addClass("headerDiv");
        stateDiv.text("State");
        state.append(stateDiv);
        zipDiv.addClass("headerDiv");
        zipDiv.text("Zip Code");
        zip.append(zipDiv);
        phoneDiv.addClass("headerDiv");
        phoneDiv.text("Phone No.");
        phone.append(phoneDiv);
        openSundaysDiv.addClass("headerDiv");
        openSundaysDiv.text("Open Sundays");
        openSundays.append(openSundaysDiv);
        tr.addClass("trHeader");
        tr.append(name).append(street).append(city).append(state).append(zip).append(phone).append(openSundays);
        table.append(tr);
        elemTag.append(table);
        return true;
    }

    function displayResponseStores(response, category) {
        if(response.length === 0) {
            let trM = $("<tr>");
            let noDataM = $("<td>");
            let noDataDivM = $("<div>");
            noDataDivM.text("No data was found from Walmart server");
            noDataM.append(noDataDivM);
            trM.addClass("trChildEven");
            trM.append(noDataM);
            table.append(trM);
        }
        for (let i = 0; i < response.length; i++) {
            let item = response[i];
            let trM = $("<tr>");
            try {
                trCounter++;
                let nameM = $("<td>");
                let nameDivM = $("<div>");
                let streetM = $("<td>");
                let streetDivM = $("<div>");
                let cityM = $("<td>");
                let cityDivM = $("<div>");
                let stateM = $("<td>");
                let stateDivM = $("<div>");
                let zipM = $("<td>");
                let zipDivM = $("<div>");
                let phoneM = $("<td>");
                let phoneDivM = $("<div>");
                let openSundaysM = $("<td>");
                let openSundaysDivM = $("<div>");
                nameDivM.addClass("storeDiv")
                nameDivM.text(item.name);
                nameM.append(nameDivM);
                streetDivM.addClass("storeDiv")
                streetDivM.text(item.streetAddress);
                streetM.append(streetDivM);
                cityDivM.addClass("storeDiv")
                cityDivM.text(item.city);
                cityM.append(cityDivM);
                stateDivM.addClass("storeDiv")
                stateDivM.text(item.stateProvCode);
                stateM.append(stateDivM);
                zipDivM.addClass("storeDiv")
                zipDivM.text(item.zip);
                zipM.append(zipDivM);
                phoneDivM.addClass("storeDiv")
                phoneDivM.text(item.phoneNumber);
                phoneM.append(phoneDivM);
                openSundaysDivM.addClass("storeDiv")
                if (item.sundayOpen) {
                    openSundaysDivM.text("Yes");
                }
                else {
                    openSundaysDivM.text("No");
                }
                openSundaysM.append(openSundaysDivM);
                if (trCounter % 2 === 0) {
                    trM.addClass("trChildEven");
                }
                else {
                    trM.addClass("trChildOdd");
                }
                trM.append(nameM).append(streetM).append(cityM).append(stateM).append(zipM).append(phoneM).append(openSundaysM);

                table.append(trM);
            }
            catch (err) { console.log(err); }
        }
        return true;
    }

    function nothingFound(category) {
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

    let city = window.localStorage.getItem("city");
    let zip = window.localStorage.getItem("zip");

    if (city !== "-" && zip === "-") {
        listWalmartStoresByCity(city);
    }
    if (city === "-" && zip !== "-") {
        listWalmartStoresByZip(zip);
    }
});

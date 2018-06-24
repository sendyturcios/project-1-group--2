var errorModal = document.getElementById('errorModal');

// Get the modal
var modal = document.getElementById('storeModal');

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
//btn.onclick = function() {
//   modal.style.display = "block";
//}

//When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == errorModal) {
        errorModal.style.display = "none";
    }
}

function hideModal() {
    modal.style.display = "none";
}

function popUpStoreModal() {
    modal.style.display = "block";
    //errorModal.style.display = "block";
}

function showErrorModal() {
    errorModal.style.display = "block";
}

{/* <p>Only one field can be blank</p> */ }
// <p>City has to alpha</p>
// <p>Zip code must be 5 digits</p>
function checkForm(form) {
    let isValid = true;
    let errorModal = $("#errorModalId");
    let zipDigitCount = 0;
    errorModal.empty();
    if (form.city.value === "" && form.zip.value === "") {
        isValid = false;
        let msg1 = $("<span>");
        msg1.text("Only one field can be blank");
        errorModal.append(msg1);
        showErrorModal();
        return false;
    }
    if(form.city.value !== "" && form.zip.value === "") {
        window.localStorage.setItem("city", form.city.value);
        window.localStorage.setItem("zip", form.zip.value);
    }
    if(form.city.value === "" && form.zip.value !== "") {
        window.localStorage.setItem("city", form.city.value);
        window.localStorage.setItem("zip", form.zip.value);
    }
    if (form.zip.value !== "") {
        
// let patt = new RegExp(form.zip.value);
// let res = patt.test("^\d{5}$");
// console.log(res);
        // if (form.zip.value !== "[^\d{5}$]") {
        //     let msg1 = $("<span>");
        //     msg1.text("Zip code must be 5 digits");
        //     errorModal.append(msg1);
        //     showErrorModal();
        //     return false;
        // }
    }

    //getWalmartStoresByCity(form.city.value);
    //hideModal();
    if (isValid) {
        window.open("store.html");
        hideModal();
    }
    return false;
}
// $(document).on("click", "#findStoreId", function(event) {
//     event.preventDefault();
//     checkForm();
//     hideModal();
// })
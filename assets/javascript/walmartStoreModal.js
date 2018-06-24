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

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function hideModal() {
    modal.style.display = "none";
}

function popUpStoreModal() {
    modal.style.display = "block";
}

function checkForm(form) {
    console.log(form);
    // if(form.city === "") {
    //     form.cityError = "City is empty";
    // }
    

    return true;
}

$(document).on("click", "#findStoreId", function(event) {
    event.preventDefault();
    checkForm();
    hideModal();
})
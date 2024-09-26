// Change background-color to radio btns div containers if checked
const GENERAL_BTN = document.getElementById("query_general");
const SUPPORT_BTN = document.getElementById("query_support");

const GENERAL_BTN_CONTAINER = document.getElementsByClassName("container_general")[0];
const SUPPORT_BTN_CONTAINER = document.getElementsByClassName("container_support")[0];

// function to give the general btn a bg-color green, and remove it from the support btn.
function addGreenBgtoGeneral() {
    if(GENERAL_BTN.checked) {
        GENERAL_BTN_CONTAINER.classList.add("green");
        SUPPORT_BTN_CONTAINER.classList.remove("green");
        console.clear();
        console.log(`${GENERAL_BTN.id} is checked.`);
        console.log(`${SUPPORT_BTN.id} isn't checked.`)
    }
}

// Reverse function to give the support btn a bg-color green, and remove it from the general btn.
function addGreenBgtoSupport() {
    if(SUPPORT_BTN.checked) {
        console.clear();
        SUPPORT_BTN_CONTAINER.classList.add("green");
        GENERAL_BTN_CONTAINER.classList.remove("green");
        console.log(`${SUPPORT_BTN.id} is checked.`)
        console.log(`${GENERAL_BTN.id} isn't checked.`);
    }
}

GENERAL_BTN.addEventListener("change", addGreenBgtoGeneral);
SUPPORT_BTN.addEventListener("change", addGreenBgtoSupport);


// Display the success message as a popup only when the form element gets validation :
// 1) create a CONSTANT to store form = FORM, success_msg = POPUP.
const FORM = document.querySelector(".contact_form");
const POPUP = document.getElementById("success_msg");
console.log(FORM, POPUP)

/* 2) Write the logic: if (FORM == validated) then { function () {
     show POPUP"}
    } else {
        do not show POPUP };
*/       
FORM.addEventListener("submit", function(event)  {
    if(!FORM.checkValidity()) {
        event.preventDefault();
        console.log("Form is not valid!"); // don't send an  invalid form
    } else {
        event.preventDefault();
        console.log("Form is valid :) ");
        POPUP.classList.add("show"); // Show popup msg

        setTimeout(function() {
            POPUP.classList.remove("show");
            console.log("Popup will fade in 5sec.");
        }, 5000);
    }
})



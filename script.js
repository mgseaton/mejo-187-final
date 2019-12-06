// MATILDA MODAL FUNCTIONALITY STARTS HERE ********************************************************************************************
    // Get the modal
    var matildaMdl = document.getElementById("matildaModal");

    // Get the button that opens the modal
    var matildaBtn = document.getElementById("matildaButton");

    // Get the <span> element that closes the modal
    var matildaClose = document.getElementById("matildaClose");

    // When the user clicks on the button, open the modal
    matildaBtn.onclick = function() {
    matildaMdl.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    matildaClose.onclick = function() {
        matildaMdl.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == matildaMdl) {
        matildaMdl.style.display = "none";
    }
    }
// MATILDA MODAL FUNCTIONALITY ENDS HERE *******************************************************************************************

// LADY JANE GRAY FUNCTIONALITY HERE 
let ljgModal = document.getElementById("ladyJaneGreyModal"); 
let ljgButton = document.getElementById("ladyJaneGreyButton"); 
let ljgClose = document.getElementById("ladyJaneGreyClose"); 
ljgButton.onclick = function() {
    ljgModal.style.display = "block"; 
}
ljgClose.onclick = function() {
    ljgModal.style.display = "none"; 
}
window.onclick = function(event) {
    if (event.target == ljgModal) {
        ljgModal.style.display = "none"; 
    }
}

// MARY I FUNCTIONALITY 
let maryiModal = document.getElementById("maryiModal"); 
let maryiButton = document.getElementById("maryiButton"); 
let maryiClose = document.getElementById("maryiClose"); 
maryiButton.onclick = function() {
    maryiModal.style.display = "block"; 
}
maryiClose.onclick = function() {
    maryiModal.style.display = "none"; 
}
window.onclick = function(event) {
    if (event.target == maryiModal) {
        maryiModal.style.display = "none"; 
    }
}

// ELIZABETH I FUNCTIONALITY 
let eliziModal = document.getElementById("elizabethiModal"); 
let eliziButton = document.getElementById("elizabethiButton"); 
let eliziClose = document.getElementById("elizabethiClose"); 
eliziButton.onclick = function() {
    eliziModal.style.display = "block"; 
}
eliziClose.onclick = function() {
    eliziModal.style.display = "none"; 
}
window.onclick = function(event) {
    if (event.target == eliziModal) {
        eliziModal.style.display == "none"; 
    }
}

// MARY II FUNCTIONALITY 
let maryiiModal = document.getElementById("maryiiModal"); 
let maryiiButton = document.getElementById("maryiiButton"); 
let maryiiClose = document.getElementById("maryiiClose"); 
maryiiButton.onclick = function() {
    maryiiModal.style.display = "block"; 
}
maryiiClose.onclick = function() {
    maryiiModal.style.display = "none"; 
}
window.onclick = function(event) {
    if (event.target == maryiiModal) {
        maryiiModal.style.display == "none"; 
    }
}

// ANNE FUNCTIONALITY 
let anneModal = document.getElementById("anneModal"); 
let anneButton = document.getElementById("anneButton"); 
let anneClose = document.getElementById("anneClose"); 
anneButton.onclick = function() {
    anneModal.style.display = "block"; 
}
anneClose.onclick = function() {
    anneModal.style.display = "none"; 
}
window.onclick = function(event) {
    if (event.target == anneModal) {
        anneModal.style.display == "none"; 
    }
}
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
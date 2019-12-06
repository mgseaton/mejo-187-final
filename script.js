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

// VICTORIA FUNCTIONALITY 
let victoriaModal = document.getElementById("victoriaModal"); 
let victoriaButton = document.getElementById("victoriaButton"); 
let victoriaClose = document.getElementById("victoriaClose"); 
victoriaButton.onclick = function() {
    victoriaModal.style.display = "block"; 
}
victoriaClose.onclick = function() {
    victoriaModal.style.display = "none"; 
}
window.onclick = function(event) {
    if (event.target == victoriaModal) {
        victoriaModal.style.display == "none"; 
    }
}

// ELIZABETH II FUNCTIONALITY 
let eliziiModal = document.getElementById("elizabethiiModal"); 
let eliziiButton = document.getElementById("elizabethiiButton"); 
let eliziiClose = document.getElementById("elizabethiiClose"); 
eliziiButton.onclick = function() {
    eliziiModal.style.display = "block"; 
}
eliziiClose.onclick = function() {
    eliziiModal.style.display = "none"; 
}
window.onclick = function(event) {
    if (event.target == eliziiModal) {
        eliziiModal.style.display == "none"; 
    }
}

// TAB FUNCTIONALITY 
function openTab(tabName, elmnt, color) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    // tablinks[i].className = tablinks[i].className.replace(" active", "");
    tablinks[i].style.backgroundColor = ""
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
//   evt.currentTarget.className += " active";
    elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
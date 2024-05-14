// Menu screen
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-500px"
}

// Count choices
var totalCount = 0;
document.getElementById('totalCount').textContent = totalCount;

function countChoices() {
    var radioButtons = document.querySelectorAll('#firstpage input[type="radio"]');

    // Loop through each radio button on the first page
    radioButtons.forEach(function(radioButton) {
        // Add event listener to each radio button
        radioButton.addEventListener('change', function() {
            // Reset total count
            totalCount = 0;
            // Loop through all radio buttons again to calculate total count
            radioButtons.forEach(function(radioButton) {
                if (radioButton.checked) {
                    totalCount += parseInt(radioButton.value);
                }
            });
            document.getElementById('totalCount').textContent = totalCount;
        });
    });
}

// Call countChoices function when the document is loaded
document.addEventListener("DOMContentLoaded", countChoices);

function opentab(event) {
    var tablinks = document.getElementsByClassName('Q-content');

    for (tablink of tablinks) {
        tablink.classList.remove("active");
    }
    if (totalCount <= 4) {
        event.currentTarget.classList.add('active');
        document.getElementById("minimal").classList.add("active")
    } 
    else if (totalCount >= 5 && totalCount <= 9) {
        event.currentTarget.classList.add('active');
        document.getElementById("mild").classList.add("active")
    }
    else if (totalCount >= 10 && totalCount <= 14) {
        event.currentTarget.classList.add('active');
        document.getElementById("moderate").classList.add("active")
    }
    else if (totalCount >= 15 && totalCount <= 19) {
        event.currentTarget.classList.add('active');
        document.getElementById("mod_severe").classList.add("active")
    }
    else if (totalCount >= 20 && totalCount <= 27) {
        event.currentTarget.classList.add('active');
        document.getElementById("severe").classList.add("active")
    }
}
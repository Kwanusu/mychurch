
window.onscroll = function() {stickyNavbar()};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

let cardNumInput =  
    document.querySelector('#cardNum') 
  
cardNumInput.addEventListener('keyup', () => { 
    let cNumber = cardNumInput.value 
    cNumber = cNumber.replace(/\s/g, "") 
  
    if (Number(cNumber)) { 
        cNumber = cNumber.match(/.{1,4}/g) 
        cNumber = cNumber.join(" ") 
        cardNumInput.value = cNumber 
    } 
});

// Hardcoded credentials for demonstration purposes
const validUsername = "user";
const validPassword = "password";

function signIn() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("accountForm").style.display = "block";
        document.getElementById("errorMessage").textContent = "";
    } else {
        document.getElementById("errorMessage").textContent = "Invalid username or password.";
    }
}

function signOut() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("accountForm").style.display = "none";
    // Clearing input fields after sign out
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

// let cardNumInput = document.querySelector('#cardNum'): This line selects the input field with the ID 'cardNum' from the HTML document and assigns it to the variable cardNumInput.

// cardNumInput.addEventListener('keyup', () => { ... }): This sets up an event listener for the 'keyup' event on the input field. Whenever a key is pressed and released within the input field, the function inside the curly braces { ... } will be executed.

// let cNumber = cardNumInput.value: This line retrieves the value entered by the user in the input field and assigns it to the variable cNumber.

// cNumber = cNumber.replace(/\s/g, ""): This line removes any whitespace characters from the value stored in cNumber. The regular expression /s/g matches all whitespace characters (spaces, tabs, newlines, etc.) and replaces them with an empty string, effectively removing them.

// if (Number(cNumber)) { ... }: This condition checks if the value in cNumber, after removing whitespace, can be converted to a number. If it can, the code inside the block { ... } is executed.

// cNumber = cNumber.match(/.{1,4}/g): This line splits the string into groups of up to four characters each. The regular expression /.{1,4}/g matches any sequence of characters (.) that is between 1 and 4 characters long. The g flag makes it match all occurrences.

// cNumber = cNumber.join(" "): This line joins the array of strings created in the previous step back into a single string, separated by spaces. This effectively formats the string as groups of four characters separated by spaces.

// cardNumInput.value = cNumber: Finally, the formatted string is set back as the value of the input field. This updates the value displayed in the input field to show the credit card number in a grouped format (typically in sets of four digits).
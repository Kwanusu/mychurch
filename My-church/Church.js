//function to hide nav links on small screens and show hamburger menu
const navLinks = document.getElementById("navLinks");
function showMenu(){
   navLinks.style.right = "0";
}
function hideMenu(){
   navLinks.style.right = "-200px";
}

// window.onscroll = function() {stickyNavbar()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function stickyNavbar() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
//function to play/pause video
function togglePlayPause() {
  const video = document.getElementById("myVideo");
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//Payment script

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("payment-form");

  form.addEventListener("submit", function(event) {
      event.preventDefault(); 
      if (validateForm()) {
          proceedToCheckout();
      } else {
          alert("Please fill out all required fields correctly.");
      }
  });

  function validateForm() {
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const address = document.getElementById("address").value;
      const cardName = document.getElementById("cardName").value;
      const cardNum = document.getElementById("cardNum").value;
      const month = document.getElementById("month").value;
      const year = document.getElementById("year").value;
      const amount = document.getElementById("amount").value;
      if (name.trim() === "" || phone.trim() === "" || address.trim() === "" ||
          cardName.trim() === "" || cardNum.trim() === "" || month === "" || year === "" || amount.trim() === "") {
          return false;
      }

      return true;
  }

  function proceedToCheckout() {
      alert("Form submitted successfully. Proceeding to checkout...");
  }
});

//function to submit form to google sheet

const submit = document.getElementById("submit-to-google-sheet")

document.getElementById("submit-to-google-sheet")
.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const searchParams = new URLSearchParams();

  for (const pair of formData) {
      searchParams.append(pair[0], pair[1]);
  }

  fetch('https://script.googleapis.com', {
      method: 'POST',
      mode: 'no-cors',
      body: searchParams
  })
  .then(response => {
      // Handle success
      document.getElementById("msg").textContent = alert("Form submitted successfully!");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
  })
  .catch(error => {
      // Handle error
      document.getElementById("msg").textContent = alert("There was an error submitting the form.");
      console.error('Error:', error);
  });
});


function doPost(e) {
  const sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getActiveSheet();
  const rowData = [];
  rowData.push(new Date());
  rowData.push(e.parameter.Name);
  rowData.push(e.parameter.email);
  rowData.push(e.parameter.Message);
  sheet.appendRow(rowData);
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}

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
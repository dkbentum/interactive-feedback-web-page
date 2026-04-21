/*==============================
Get all rating buttons
===============================*/
const ratings = document.querySelectorAll(".rating");


//lets store selected rating state here
let selectedRating = null;

//lets loop through each button and make them listen to clicks
ratings.forEach(button =>{
    button.addEventListener("click", () => {

        //deactivate all buttons first
        ratings.forEach(btn=>btn.classList.remove("active"));

        //now lets activate on click
        button.classList.add("active");

        //store selected value
        selectedRating = button.textContent;

        //show the selected value in the console
        console.log(selectedRating)
    });
});

/*=========================
submit button logic
==========================*/
// Get the card container
const card = document.getElementById("card");

// Handle submit button click
document.querySelector(".submit_btn").addEventListener("click", () => {

  // If user didn't pick a rating
  if (!selectedRating) {
    alert("Please select a rating first!");
    return;
  }

  // Replace entire card content
  card.innerHTML = `
    <div class="icon"></div>

    <h2>Thank you!</h2>

    <p>
      You selected <strong>${selectedRating}</strong> out of 5.
    </p>

    <p>
      We appreciate your feedback. It helps us improve 🚀
    </p>
  `;
});
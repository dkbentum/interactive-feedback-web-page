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
     <div  class="icon"> <img src="images/icon-star.svg"></div>

    <img src="images/illustration-thank-you.svg">
    
    <div class="ratedReply" style="background-color:gray; border-radius:25px">
    <p style= "color:orange; font-size:17px">
      You selected <strong>${selectedRating}</strong> out of 5.
    </p>
    </div>

    <h2>Thank You!</h2>

    <p>
      We appreciate you taking the time to give us a rating. If you ever need more support, don't hesitate to get in touch!
    </p>
  `;
});
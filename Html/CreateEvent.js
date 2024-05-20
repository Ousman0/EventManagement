document.addEventListener("DOMContentLoaded", function() {
    console.log("create events page ")
    const createEventButton = document.querySelector(".cstmbtn");
    // const popup = document.getElementById(".popup2");
    const popup = document.getElementById("defaultPopup");
    const closeButton = document.querySelector(" .closeButton");

    createEventButton.addEventListener("click", function() {
        console.log("hello popup")
        popup.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        popup.style.display = "none";
    });
    


   
});




// let form = document.getElementById("myForm");

// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     let formData = new FormData(e.target);
//     let formObj = Object.fromEntries(formData);
//     console.log(formObj);
//     console.log(formObj.GroomName,formObj.bridename);
//     console.log(JSON.stringify(formObj))

//     // Create card element
//     const card = document.querySelector(".eventslistheader");
//     // const card = document.createElement("div");
//     card.classList.add("card");


//     // Populate card with form data
//     card.innerHTML = `
//     <h2>Event Details</h2>
//     <p><strong>Groom:</strong> ${formObj.GroomName}</p>
//     <p><strong>Bride:</strong> ${formObj.bridename}</p>
//     <p><strong>Date:</strong> ${formObj.Eventdate}</p>
//     `;

//     // Append card to the main content area
//     const mainContent = document.querySelector(".maincontent");
//     mainContent.appendChild(card);

//     // Close the popup
//     const popup = document.getElementById("defaultPopup");
//     popup.style.display = "none";

//     form.reset();

// })





let eventsArray = []; // Array to store event details

let form = document.getElementById("myForm");

form.addEventListener('submit', function(e){
    e.preventDefault();

    let formData = new FormData(e.target);
    let formObj = Object.fromEntries(formData);
    console.log(formObj);

    // Push the new event object to the eventsArray
    eventsArray.push(formObj);

    // Clear existing cards
    const eventsListHeader = document.querySelector(".eventslistheader");
    eventsListHeader.innerHTML = "";

    // Iterate over eventsArray and create cards for each event
    eventsArray.forEach((event, index) => {
        // Create card element
        const card = document.createElement("div");
        card.classList.add("card");

        // Populate card with event data
        card.innerHTML = `
            <h2>Event Details</h2>
            <p><strong>Groom:</strong> ${event.GroomName}</p>
            <p><strong>Bride:</strong> ${event.bridename}</p>
            <p><strong>Date:</strong> ${event.Eventdate}</p>
        `;

         // Add click event listener to the card
         card.addEventListener("click", function() {
            displayEventDetails(card); // Display event details when the card is clicked
        });

        // Append card to the eventsListHeader
        eventsListHeader.appendChild(card);
    });

    // Close the popup
    const popup = document.getElementById("defaultPopup");
    popup.style.display = "none";

     // Reset the form
     form.reset();
});







// function displayEventDetails(card) {


//      // Remove any existing event details div
//      const existingEventDetails = document.querySelector(".event-details");
//      if (existingEventDetails) {
//          existingEventDetails.remove();
//      }
 

//        // Get the index of the clicked card
//        const index = Array.from(document.querySelectorAll(".card")).indexOf(card);

//     // Get the event details from the card's HTML content
//     const groom = card.querySelector("p:nth-child(2)").innerText.split(":")[1].trim();
//     const bride = card.querySelector("p:nth-child(3)").innerText.split(":")[1].trim();
//     const date = card.querySelector("p:nth-child(4)").innerText.split(":")[1].trim();

//     // Create and display a div with event details
//     const eventDetailsDiv = document.createElement("div");
//     eventDetailsDiv.classList.add("event-details");
//     eventDetailsDiv.innerHTML = `
//         <p>Hello World! Event Index: ${index}</p>
//         <p><strong>Groom:</strong> ${groom}</p>
//         <p><strong>Bride:</strong> ${bride}</p>
//         <p><strong>Date:</strong> ${date}</p>
//         <div>
//         <div style="font-size:2rem;margin-top:2rem">
//             <p> please select your occation from the drop down</p>
//         </div>
//         <div>
//         <div class="input01">
//         <label for="catagoryselected"> select occation</label><br>
//         <select name="dropdown" id="catagoryselected" onchange="appendCard(this)">
//           <option value="option1"  class="blackclr">engagement</option>
//           <option value="option2"  class="blackclr" selected>haldi (Selected by default)</option>
//           <option value="option3"  class="blackclr">sangeeth</option>
//           <option value="option3"  class="blackclr">bride</option>
//           <option value="option3"  class="blackclr">groom</option>
//           <option value="option3"  class="blackclr">wedding</option>
//           <option value="option3"  class="blackclr">reception</option>
//       </select>
//       </div>
//         </div>
//         </div>
//     `;

//     // Append the event details div to the main content area
//     const mainContent = document.querySelector(".eventslistheader");
//     const eventContent = document.querySelector(".eventdetails");
//     mainContent.style.display = "none";
//     // mainContent.appendChild(eventDetailsDiv);

//     eventContent.style.display = "block";



//     eventContent.appendChild(eventDetailsDiv);




    
// }



// Array to store references to appended cards
const appendedCards = [];

function displayEventDetails(card) {
    // Remove any existing event details div
    const existingEventDetails = document.querySelector(".event-details");
    if (existingEventDetails) {
        existingEventDetails.remove();
    }

    // Get the index of the clicked card
    const index = Array.from(document.querySelectorAll(".card")).indexOf(card);

    // Get the event details from the card's HTML content
    const groom = card.querySelector("p:nth-child(2)").innerText.split(":")[1].trim();
    const bride = card.querySelector("p:nth-child(3)").innerText.split(":")[1].trim();
    const date = card.querySelector("p:nth-child(4)").innerText.split(":")[1].trim();

    // Create and display a div with event details
    const eventDetailsDiv = document.createElement("div");
    eventDetailsDiv.classList.add("event-details");
    eventDetailsDiv.innerHTML = `
        <p>Hello World! Event Index: ${index}</p>
        <p><strong>Groom:</strong> ${groom}</p>
        <p><strong>Bride:</strong> ${bride}</p>
        <p><strong>Date:</strong> ${date}</p>
        <div>
            <div style="font-size:2rem;margin-top:2rem">
                <p> please select your occasion from the drop down</p>
            </div>
            <div>
                <div class="input01">
                    <label for="catagoryselected"> select category</label><br>
                    <select name="dropdown" id="catagoryselected" onchange="appendCard(this)">
                        <option value="engagement"  class="blackclr">engagement</option>
                        <option value="haldi"  class="blackclr" selected>haldi (Selected by default)</option>
                        <option value="sangeeth"  class="blackclr">sangeeth</option>
                        <option value="bride"  class="blackclr">bride</option>
                        <option value="groom"  class="blackclr">groom</option>
                        <option value="wedding"  class="blackclr">wedding</option>
                        <option value="reception"  class="blackclr">reception</option>
                    </select>
                </div>
            </div>
            <div class="card-container">
            </div>
        </div>
    `;

    // Append the event details div to the main content area
    const mainContent = document.querySelector(".eventslistheader");

    const eventContent = document.querySelector(".eventdetails");

    mainContent.style.display = "none";
    eventContent.innerHTML = ''; // Clear any existing content

    eventContent.style.display = "block";
    eventContent.appendChild(eventDetailsDiv);
}



// function appendCard(selectElement) {
//     // Get the selected option value
//     const selectedOption = selectElement.value;
//     console.log(selectedOption)

//     // Create a card with the selected option as title and append it
//     const newCard = document.createElement("div");
//     newCard.classList.add("card");

//     // Here, you can set the image source based on the selected option value
//     // For demonstration, I'm just using a placeholder image
//     newCard.innerHTML = `<div class="card">

//         <img src="" alt="${selectedOption}">
//         <p>${selectedOption}</p>
//         </div>
//     `;

//     // Append the new card
//     const cardContainer = document.querySelector(".card-container");
//     cardContainer.appendChild(newCard);
//     cardContainer.classList.add("cards");
//     // Store the reference to the appended card
//     appendedCards.push(newCard);

// }

    
    // let popbtn = document.querySelector(".card")

    // popbtn.addEventListener("click",function(){
    //     console.log("helo popup")
    //     const createEventButton = document.querySelector(".cstmbtn");
    //     // const popup = document.getElementById(".popup2");
    //     const popup = document.getElementById("defaultPopup");
    //     const closeButton = document.querySelector(" .closeButton");
    
    //     createEventButton.addEventListener("click", function() {
    //         console.log("hello popup")
    //         popup.style.display = "block";
    //     });
    
    //     closeButton.addEventListener("click", function() {
    //         popup.style.display = "none";
    //     });
        
    
    // })


    


    // method 2


    // function appendCard(selectElement) {
    //     // Get the selected option value
    //     const selectedOption = selectElement.value;
    
    //     // Create a card with the selected option as title and append it
    //     const newCard = document.createElement("div");
    //     newCard.classList.add("card");
    //     newCard.innerHTML = `
    //         <img src="" alt="${selectedOption}">
    //         <p>${selectedOption}</p>
    //     `;
    
    //     // Append the new card
    //     const cardContainer = document.querySelector(".card-container");
    //     cardContainer.appendChild(newCard);
    //     cardContainer.classList.add("cards");
    //     // Store the reference to the appended card
    //     appendedCards.push(newCard);
    // }
    
    // // Event listener for card click (delegated from a parent element)
    // document.querySelector(".card").addEventListener("click", function(event) {
    //     console.log("card clicked")
    //     // Check if the clicked element has the class "card"
    //     if (event.target.classList.contains("card")) {
    //         console.log("Card clicked, showing popup");
    //         const popup = document.getElementById("defaultPopup");
    //         if (popup) {
    //             popup.style.display = "block";
    //         } else {
    //             console.error("Popup element not found");
    //         }
    //     }
    // });
    
    // // Event listener for close button
    // document.querySelector(".closeButton").addEventListener("click", function() {
    //     const popup = document.getElementById("defaultPopup");
    //     if (popup) {
    //         popup.style.display = "none";
    //     } else {
    //         console.error("Popup element not found");
    //     }
    // });



// method 03



function appendCard(selectElement) {
    // Get the selected option value
    const selectedOption = selectElement.value;

    // Create a card with the selected option as title and append it
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = `
        <img src="" alt="${selectedOption}">
        <p>${selectedOption}</p>
    `;

    // Append the new card
    const cardContainer = document.querySelector(".card-container");
    cardContainer.appendChild(newCard);
    cardContainer.classList.add("cards");
    // Store the reference to the appended card
    appendedCards.push(newCard);

    // // If this is the first card, attach the event listener for card click
    // if (appendedCards.length >= 1) {
    //     document.querySelector(".card").addEventListener("click", function(event) {
    //         console.log("card clicked");
    //         // Check if the clicked element has the class "card"
    //         if (event.target.classList.contains("card")) {
    //             console.log("Card clicked, showing popup");
    //             const popup = document.getElementById("defaultPopup");
    //             if (popup) {
    //                 popup.style.display = "block";
    //             } else {
    //                 console.error("Popup element not found");
    //             }
    //         }
    //     });
    // }

     // If this is the first card, attach the event listener for card click
     if (appendedCards.length === 1) {
        newCard.addEventListener("click", function(event) {
            console.log("card clicked");
            // Check if the clicked element has the class "card"
            if (event.target.classList.contains("card")) {
                console.log("Card clicked, showing popup");
                const popup = document.getElementById("defaultPopup");
                if (popup) {
                    popup.style.display = "block";
                } else {
                    console.error("Popup element not found");
                }
            }
        });
    }
}






// close button

const eventdetailsclosebtn = document.getElementById("eventdetailsclose") ;

eventdetailsclosebtn.addEventListener("click", function() {
    // displayEventDetails(card); 
    const mainContent = document.querySelector(".eventslistheader");
    const eventContent = document.querySelector(".eventdetails");
    // mainContent.appendChild(eventDetailsDiv);
    
    eventContent.style.display = "none";
    mainContent.style.display = "block";
})



const valueDisplay = document.querySelector(".num");



const display = ()=>{
    let startValue = 0
    let endValue = 1234

    let count = setInterval(()=>{
        valueDisplay.innerHTML = startValue++
        if(startValue > endValue){
            clearInterval(count)
        }
    }, 10)
}

display()

// booking

//Variabels
let totalCost;
let roomCost;
let kidsMeal;
let extraBedCost;
let guide = "";
let nationality = "";
let adultCost;
let kidCost;
let guideCost;
let adventureCost = 0;
let adventureTotal = 0;
let saved = 0;
let loyaltyPoints = 0;
let showLoyaltyPoints = 0;

//Referance
BookingForm = document.getElementById("bookingForm");
AdventureForm = document.getElementById("adventureForm");

//Booking Form
fullName = document.getElementById("name");
email = document.getElementById("email");
checkInDate = document.getElementById("check-in");
numOfNights = document.getElementById("numberOfNights");
roomType = document.getElementById("room-type");
numberOfAdults = document.getElementById("adults");
numberOfChildren = document.getElementById("children");
wifi = document.getElementById("wifi");
poolView = document.getElementById("pool-view");
gardenView = document.getElementById("garden-view");
ac = document.getElementById("ac");
extraBeds = document.getElementById("extra_beds");
promoTxt = document.getElementById("promo");
bookingBtn = document.getElementById("bookNow");
numOfRooms = document.getElementById("numberOfRooms");

currentBooking = document.getElementById("current-booking");
ovreallBooking = document.getElementById("overallBookingDisplay");

//Popup
popup = document.getElementById("popup");
popupDetails = document.getElementById("popupContent");
popupBtn = document.getElementById("popupOk");

//Bottom Button
favouriteBtn = document.getElementById("favourite");
loyaltyBtn = document.getElementById("loyalty");

//Adventure Booking Form
date = document.getElementById("date");
time = document.getElementById("time");
housCount = document.getElementById("hours");
adventureChoice = document.getElementById("adventureType");
Local = document.getElementById("local");
Foreign = document.getElementById("foreign");
adventureAdults = document.getElementById("adventure-adults");
adventureKids = document.getElementById("adventure-kids");
adultGuide = document.getElementById("adult_guide");
kidsGuide = document.getElementById("kid-guide");
adventureBtn = document.getElementById("bookAdventure");

currentAdventureBooking = document.getElementById("current-adventure");

//Event Handlers
window.addEventListener("load", init);
BookingForm.addEventListener("input", bookingUpdate);
AdventureForm.addEventListener("input",adventureUpdate);
bookingBtn.addEventListener("click",confirmBooking);
adventureBtn.addEventListener("click",confirmAdventureBooking);
favouriteBtn.addEventListener("click", addToFavourite);
loyaltyBtn.addEventListener("click", checkLoyalty);
popupBtn.addEventListener("click", closePopup);



//Functions
function init(){
  var today = new Date().toISOString().split('T')[0];
  document.getElementsByName("check-in")[0].setAttribute('min', today);
  document.getElementsByName("date")[0].setAttribute('min', today);
  
    currentBooking.innerHTML = 
    `
      <tr>
        <td>Check-in Date:</td>
        <td style="width:65%"></td>
      </tr>
      <tr>
        <td>Number of Nights:</td>
        <td></td>
      </tr>
      <tr>
        <td>Room Type:</td>
        <td></td>
      </tr>
      <tr>
        <td>Number of Adults:</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Number of Children:</td>
        <td>0</td>
      </tr>
      <tr>
        <td>WiFi:</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Pool View:</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Garden View:</td>
        <td>No</td>
      </tr>
      <tr>
        <td>A/C:</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Extra Beds:</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Total:</td>
        <td>LKR 0.00</td>
      </tr>`;
    currentAdventureBooking.innerHTML =
    `
    <tr>
      <td>Date:</td>
      <td style="width:65%"></td>
    </tr>
    <tr>
      <td>Time:</td>
      <td>08:00</td>
    </tr>
    <tr>
      <td>Number of hours:</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Adventure Type:</td>
      <td></td>
    </tr>
    <tr>
      <td>Nationality:</td>
      <td></td>
    </tr>
    <tr>
      <td>Number of Adults:</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Number of Children:</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Need of a guide:</td>
      <td></td>
    </tr>
    <tr>
      <td>Total:</td>
      <td>LKR 0.00</td>
    </tr>`;
  ovreallBooking.innerHTML =
  `
  <tr>
    <td>Full Name:</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Email:</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Check-in Date:</td>
    <td style="width:65%">-</td>
  </tr>
  <tr>
    <td>Number of Nights:</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Room Type:</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Number of Adults:</td>
    <td>0</td>
  </tr>
  <tr>
    <td>Number of Children:</td>
    <td>0</td>
  </tr>
  <tr>
    <td>WiFi:</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Pool View:</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Garden View:</td>
    <td>-</td>
  </tr>
  <tr>
    <td>A/C:</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Extra Beds:</td>
    <td>0</td>
  </tr>
  <tr>
    <td>Total:</td>
    <td>LKR 0.00</td>
  </tr>`;
}
function bookingUpdate(){
  if(roomType.value === "Single"){
    roomCost = 25000;
  }
  else if(roomType.value === "Double"){
    roomCost = 35000;
  }
  else if(roomType.value === "Triple"){
    roomCost = 40000;
  }
  else{
    roomCost = 0
  }
  kidsMeal = numberOfChildren.value*5000;
  extraBedCost = extraBeds.value*8000;
  
  totalCost = (roomCost*numOfRooms.value + kidsMeal + extraBedCost)*numOfNights.value;

  if(promoTxt.value === "123"){
    totalCost = totalCost - totalCost*5/100;
  }

  currentBooking.innerHTML = 
  `
    <tr>
      <td>Check-in Date:</td>
      <td>${checkInDate.value}</td>
    </tr>
    <tr>
      <td>Number of Nights:</td>
      <td>${numOfNights.value}</td>
    </tr>
    <tr>
      <td>Room Type:</td>
      <td>${roomType.value} x ${numOfRooms.value}</td>
    </tr>
    <tr>
      <td>Number of Adults:</td>
      <td>${numberOfAdults.value}</td>
    </tr>
    <tr>
      <td>Number of Children:</td>
      <td>${numberOfChildren.value}</td>
    </tr>
    <tr>
      <td>WiFi:</td>
      <td>${wifi.checked ? 'Yes' : 'No'}</td>
    </tr>
    <tr>
      <td>Pool View:</td>
      <td>${poolView.checked ? 'Yes' : 'No'}</td>
    </tr>
    <tr>
      <td>Garden View:</td>
      <td>${gardenView.checked ? 'Yes' : 'No'}</td>
    </tr>
    <tr>
      <td>A/C:</td>
      <td>${ac.checked ? 'Yes' : 'No'}</td>
    </tr>
    <tr>
      <td>Extra Beds:</td>
      <td>${extraBeds.value}</td>
    </tr>
    <tr>
        <td>Total:</td>
        <td style="width:65%">LKR ${totalCost.toFixed(2)}</td>
      </tr>`;
}
function adventureUpdate(){
  if(Local.checked == true){
    nationality = "Local";
    adultCost = 5000;
    kidCost = 2000;
  }
  else if (Foreign.checked == true){
    nationality = "Foreign";
    adultCost = 10000;
    kidCost = 5000;
  }
  else{
    nationality = "";
    adultCost = 0;
    kidCost = 0;
  }
if(adultGuide.checked == true){
  if(kidsGuide.checked == true){
    guide = "For Adults and Kids";
    guideCost = 1500;
  }
  else{
    guide = "For Adults";
    guideCost = 1000;
  }
}
else{
  if(kidsGuide.checked == true){
    guide = "For Kids";
    guideCost = 500;
  }
  else{
    guide = "";
    guideCost = 0;
  }
}

adventureCost = adultCost*housCount.value*adventureAdults.value + kidCost*housCount.value*adventureKids.value;

adventureTotal = adventureCost + guideCost;

currentAdventureBooking.innerHTML =
  `
    <tr>
      <td>Date:</td>
      <td style="width:65%">${date.value}</td>
    </tr>
    <tr>
      <td>Time:</td>
      <td>${time.value}</td>
    </tr>
    <tr>
      <td>Number of hours:</td>
      <td>${housCount.value}</td>
    </tr>
    <tr>
      <td>Adventure Type:</td>
      <td>${adventureChoice.value}</td>
    </tr>
    <tr>
      <td>Nationality:</td>
      <td>${nationality}</td>
    </tr>
    <tr>
      <td>Number of Adults:</td>
      <td>${adventureAdults.value}</td>
    </tr>
    <tr>
      <td>Number of Children:</td>
      <td>${adventureKids.value}</td>
    </tr>
    <tr>
      <td>Need of a guide:</td>
      <td>${guide}</td>
    </tr>
    <tr>
      <td>Total:</td>
      <td>LKR ${adventureTotal.toFixed(2)}</td>
    </tr>`;
}
function confirmBooking(evt){
  if (BookingForm.checkValidity()) {
    evt.preventDefault();
    
    if(numOfRooms.value > 3){
      loyaltyPoints = numOfRooms.value*20;
      alert("Thank You for Booking with us!\n\nyou erned "+loyaltyPoints+" loyalty points");
    }
    else{
      alert("Thank You for Booking with us!");
      loyaltyPoints = 0;
    }
    
    sotrageLoyalty = localStorage.getItem("loyalty");

    TotalLoyaltyPoints = sotrageLoyalty - loyaltyPoints;

    showLoyaltyPoints = -1*TotalLoyaltyPoints;
    
    localStorage.setItem("loyalty", TotalLoyaltyPoints);

    saved = {Name: fullName.value, Email: email.value, RoomType: roomType.value, noOFRooms: numOfRooms.value,
      WiFi: wifi.checked ? 'yes':'no', PoolView: poolView.checked ? 'yes':'no', GradenView: gardenView.checked ? 'yes':'no', 
      AC: ac.checked ? 'yes':'no'};

    ovreallBooking.innerHTML = 
    `
      <tr>
        <td>Full Name:</td>
        <td>${fullName.value}</td>
      </tr>
      <tr>
        <td>Email:</td>
        <td>${email.value}</td>
      </tr>
      <tr>
        <td>Check-in Date:</td>
        <td>${checkInDate.value}</td>
      </tr>
      <tr>
        <td>Check-out Date:</td>
        <td>${numOfNights.value}</td>
      </tr>
      <tr>
        <td>Room Type:</td>
        <td>${roomType.value} x ${numOfRooms.value}</td>
      </tr>
      <tr>
        <td>Number of Adults:</td>
        <td>${numberOfAdults.value}</td>
      </tr>
      <tr>
        <td>Number of Children:</td>
        <td>${numberOfChildren.value}</td>
      </tr>
      <tr>
        <td>WiFi:</td>
        <td>${wifi.checked ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td>Pool View:</td>
        <td>${poolView.checked ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td>Garden View:</td>
        <td>${gardenView.checked ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td>A/C:</td>
        <td>${ac.checked ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td>Extra Beds:</td>
        <td>${extraBeds.value}</td>
      </tr>
      <tr>
          <td>Total:</td>
          <td style="width:65%">LKR ${totalCost.toFixed(2)}</td>
        </tr>`;
    
    BookingForm.reset();
    
    currentBooking.innerHTML = 
    `
      <tr>
        <td>Check-in Date:</td>
        <td style="width:65%"></td>
      </tr>
      <tr>
        <td>Check-out Date:</td>
        <td></td>
      </tr>
      <tr>
        <td>Room Type:</td>
        <td></td>
      </tr>
      <tr>
        <td>Number of Adults:</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Number of Children:</td>
        <td>0</td>
      </tr>
      <tr>
        <td>WiFi:</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Pool View:</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Garden View:</td>
        <td>No</td>
      </tr>
      <tr>
        <td>A/C:</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Extra Beds:</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Total:</td>
        <td>LKR 0.00</td>
      </tr>`;

    ovreallBooking.scrollIntoView({behavior: 'smooth'});
  }
}
function confirmAdventureBooking(evt){
  if (AdventureForm.checkValidity()) {
    evt.preventDefault();

    popupDetails.innerHTML =  `
    <tr>
      <td>Date:</td>
      <td>${date.value}</td>
    </tr>
    <tr>
      <td>Time:</td>
      <td>${time.value}</td>
    </tr>
    <tr>
      <td>Number of hours:</td>
      <td>${housCount.value}</td>
    </tr>
    <tr>
      <td>Adventure Type:</td>
      <td>${adventureChoice.value}</td>
    </tr>
    <tr>
      <td>Nationality:</td>
      <td>${nationality}</td>
    </tr>
    <tr>
      <td>Number of Adults:</td>
      <td>${adventureAdults.value}</td>
    </tr>
    <tr>
      <td>Number of Children:</td>
      <td>${adventureKids.value}</td>
    </tr>
    <tr>
      <td>Need of a guide:</td>
      <td>${guide}</td>
    </tr>
    <tr>
      <td>Total:</td>
      <td>LKR ${adventureTotal.toFixed(2)}</td>
    </tr>`;

    document.body.style.pointerEvents = 'none';

    popup.classList.add("open_popup");
    popup.style.pointerEvents = 'auto';

    AdventureForm.reset();

    currentAdventureBooking.innerHTML =
    `
    <tr>
      <td>Date:</td>
      <td style="width:65%"></td>
    </tr>
    <tr>
      <td>Time:</td>
      <td>08:00</td>
    </tr>
    <tr>
      <td>Number of hours:</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Adventure Type:</td>
      <td></td>
    </tr>
    <tr>
      <td>Nationality:</td>
      <td></td>
    </tr>
    <tr>
      <td>Number of Adults:</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Number of Children:</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Need of a guide:</td>
      <td></td>
    </tr>
    <tr>
      <td>Total:</td>
      <td>LKR 0.00</td>
    </tr>`;
  }
}
function closePopup(){
  popup.classList.remove("open_popup");
  document.body.style.pointerEvents = 'auto';
}
function addToFavourite(){
  console.log(saved);
  if(saved != 0){
    alert("Successful!");
  localStorage.setItem("saved", JSON.stringify(saved));
  }
  else{
    alert("Make a booking first!");
  }
}
function checkLoyalty(){
  if(showLoyaltyPoints != 0 ){
    alert("You erned "+showLoyaltyPoints+" loyalty points!");
  }
  else{
    alert("You erned 0 loyalty points!");
  }
}
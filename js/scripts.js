// When the document is fully loaded
window.onload = function () {
    // Display current year in the copyright statement
    document.getElementById("copyright").innerHTML 
    = new Date().getFullYear();
}

//Return To Top Button
window.onload = function () {
    document.getElementById("copyright").innerHTML 
    = new Date().getFullYear();
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 400) {
    document.getElementById("cornerBtn").style.display = "block";
  } else {
    document.getElementById("cornerBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Slideshow//
let intIndex = 0;

function incrementIndex() {
    intIndex++;
}

function showImage() {
    console.log("Showing image with index:", intIndex);
}

window.onload = function() {
    document.getElementById("copyright").innerHTML = new Date().getFullYear();

    setInterval(function() {
        showImage();
        incrementIndex();
    }, 5000);
}


//Digital Clock//
// function currentTime() {
//     let theTime = new Date();
    
//     let theDayNum = theTime.getDay();
//     let theHour = theTime.getHours();
//     let theMinutes = theTime.getMinutes();
//     let theSeconds = theTime.getSeconds();

//     let theDay = ['SUN', 'MON','TUE', 'WED', 'THU', 'FRI','SAT']

//     let ampm = "AM";

//     if(theHour >= 12){
//         ampm = "PM"
//     } 

//     if(theHour > 12) {
//         theHour = theHour % 12;
//     }

//     if(theHour < 10) {
//         theHour = "0" + theHour;
//     }
//     if(theSeconds < 10) {
//         theSeconds = "0" + theSeconds;
//     }
//     if(theMinutes < 10) {
//         theMinutes = "0" + theMinutes;
//     }

//     document.getElementById('day').innerHTML = theDay[theDayNum];
//     document.getElementById('hour').innerHTML = theHour;
//     document.getElementById('minute').innerHTML = theMinutes;
//     document.getElementById('second').innerHTML = theSeconds;
//     document.getElementById('ampm').innerHTML =  ampm;

//     let evenSeconds = theSeconds % 2

//     if(evenSeconds === 0) {
//         document.getElemendByID('colon1').style.color = "red";
//         document.getElemendByID('colon2').style.color = "red";
//     }
//     else{
//         document.getElemendByID('colon1').style.color = "black";
//         document.getElemendByID('colon2').style.color = "black";
//     }

// }

// setInterval(() => {
//     currentTime();
// }, 1000);


let countdown = 120; // Initial value of the countdown

function startCountdown() {
    setInterval(() => {
        // Update the countdown value
        countdown--;

        // If countdown reaches 0, reset to 120
        if (countdown < 0) {
            countdown = 120;
        }

        // Update the clock display with the countdown value
        updateClock(countdown);
    }, 1000); // Update the countdown every second
}

function updateClock(countdown) {
    // Calculate minutes and seconds from the countdown value
    let minutes = Math.floor(countdown / 60);
    let seconds = countdown % 60;

    // Add leading zeros if necessary
    let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    // Update the clock display
    document.getElementById('minute').innerHTML = formattedMinutes;
    document.getElementById('second').innerHTML = formattedSeconds;
}

// Call the startCountdown function when the window loads
window.onload = function() {
    startCountdown();
};
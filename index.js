document.addEventListener("DOMContentLoaded", function () {
    const startCountdownButton = document.getElementById("startCountdown");
    const birthdayInput = document.getElementById("birthdayInput");
    const countdownDisplay = document.getElementById("countdown");
    const daysDisplay = document.getElementById("days");
    const hoursDisplay = document.getElementById("hours");
    const minutesDisplay = document.getElementById("minutes");
    const secondsDisplay = document.getElementById("seconds");

    let countdownInterval;

    startCountdownButton.addEventListener("click", function () {
        const birthdayDate = new Date(birthdayInput.value);
        const currentDate = new Date();

        if (isNaN(birthdayDate.getTime())) {
            alert("Please enter a valid date.");
            return;
        }

        const timeUntilBirthday = birthdayDate - currentDate;

        if (timeUntilBirthday < 0) {
            alert("Please enter a future date.");
            return;
        }

        clearInterval(countdownInterval);

        function updateCountdown() {
            const timeUntilBirthday = birthdayDate - new Date();

            if (timeUntilBirthday <= 0) {
                clearInterval(countdownInterval);
                countdownDisplay.textContent = "Happy Birthday!";
                return;
            }

            const days = Math.floor(timeUntilBirthday / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeUntilBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeUntilBirthday % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeUntilBirthday % (1000 * 60)) / 1000);

            daysDisplay.textContent = days;
            hoursDisplay.textContent = String(hours).padStart(2, '0');
            minutesDisplay.textContent = String(minutes).padStart(2, '0');
            secondsDisplay.textContent = String(seconds).padStart(2, '0');
        }

        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    });
});

























// function checkCountdown () {
//     let event = document.getElementById('eventDate')
//     let now = new Date()
//     let eventDate = new Date(event.value)
//     let difference = eventDate.getTime() - now.getTime()
//     let difToDay = Math.round(difference / 1000 / 60 / 60 / 24)
//     let countdown = document.getElementById('countdown')
//     countdown.innerText = difToDay
//   }
  
//   function checkAge () {
//     let dob = document.getElementById('dob')
//     let dobDate = new Date(dob.value)
//     let now = new Date()
//     console.log('current year->', now.getFullYear())
//     console.log('dob year->', dobDate.getFullYear())
  
//     let age = now.getFullYear() - dobDate.getFullYear()
//     let ageElement = document.getElementById('age')
//     ageElement.innerText = age
//   }

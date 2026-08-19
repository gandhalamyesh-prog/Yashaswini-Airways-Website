// =====================================
// YASHASWINI AIRWAYS JAVASCRIPT
// =====================================


// HOME PAGE - FLIGHT SEARCH
const flightSearchForm = document.getElementById("flightSearchForm");

if (flightSearchForm) {

    flightSearchForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const from = document.getElementById("searchFrom").value;
        const to = document.getElementById("searchTo").value;
        const date = document.getElementById("searchDate").value;

        const message = document.getElementById("searchMessage");

        if (from === to) {

            message.innerHTML =
                `<div class="search-error">
                    Departure and destination cannot be the same.
                </div>`;

            return;
        }

        message.innerHTML =
            `<div class="search-success">
                ✈ Flights available from <strong>${from}</strong>
                to <strong>${to}</strong> on
                <strong>${date}</strong>.
                <br><br>
                <a href="flights.html" class="book-btn">
                    View Flights
                </a>
            </div>`;
    });
}


// =====================================
// SEAT SELECTION
// =====================================

const seats = document.querySelectorAll(".seat:not(.booked)");

let selectedSeat = "";

seats.forEach(function(seat) {

    seat.addEventListener("click", function() {

        seats.forEach(function(s) {
            s.classList.remove("selected");
        });

        seat.classList.add("selected");

        selectedSeat = seat.dataset.seat;

        const selectedSeatText =
            document.getElementById("selectedSeat");

        if (selectedSeatText) {
            selectedSeatText.innerText =
                "Selected Seat: " + selectedSeat;
        }
    });
});


// =====================================
// BOOKING FORM
// =====================================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        if (selectedSeat === "") {

            alert("Please select a seat before confirming your booking.");

            return;
        }

        const firstName =
            document.getElementById("firstName").value;

        const lastName =
            document.getElementById("lastName").value;

        const email =
            document.getElementById("email").value;

        const from =
            document.getElementById("bookingFrom").value;

        const to =
            document.getElementById("bookingTo").value;

        const date =
            document.getElementById("travelDate").value;

        const travelClass =
            document.getElementById("travelClass").value;

        if (from === to) {

            alert(
                "Departure and destination cannot be the same."
            );

            return;
        }

        const bookingId =
            "YA" + Math.floor(100000 + Math.random() * 900000);

        const bookingResult =
            document.getElementById("bookingResult");

        bookingResult.innerHTML = `
            <div class="booking-success">

                <h2>🎉 Booking Confirmed!</h2>

                <p>
                    <strong>Booking ID:</strong>
                    ${bookingId}
                </p>

                <p>
                    <strong>Passenger:</strong>
                    ${firstName} ${lastName}
                </p>

                <p>
                    <strong>Email:</strong>
                    ${email}
                </p>

                <p>
                    <strong>Route:</strong>
                    ${from} → ${to}
                </p>

                <p>
                    <strong>Travel Date:</strong>
                    ${date}
                </p>

                <p>
                    <strong>Class:</strong>
                    ${travelClass}
                </p>

                <p>
                    <strong>Seat:</strong>
                    ${selectedSeat}
                </p>

                <br>

                <h3>
                    Your Yashaswini Airways booking
                    has been successfully confirmed!
                </h3>

                <br>

                <a href="index.html" class="btn">
                    Back to Home
                </a>

            </div>
        `;

        bookingForm.style.display = "none";

        window.scrollTo({
            top: document.getElementById("bookingResult").offsetTop - 100,
            behavior: "smooth"
        });
    });
}


// =====================================
// CONTACT FORM
// =====================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const contactMessage =
            document.getElementById("contactMessage");

        contactMessage.innerHTML =
            `<div class="search-success">
                ✓ Thank you! Your message has been submitted successfully.
            </div>`;

        contactForm.reset();
    });
}


// =====================================
// LOGIN FORM
// =====================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        const password =
            document.getElementById("loginPassword").value;

        const loginMessage =
            document.getElementById("loginMessage");

        if (password.length < 4) {

            loginMessage.innerHTML =
                `<div class="search-error">
                    Password must contain at least 4 characters.
                </div>`;

            return;
        }

        localStorage.setItem("yashaswiniUser", email);

        loginMessage.innerHTML =
            `<div class="search-success">
                ✓ Login successful!
                <br>
                Welcome to Yashaswini Airways.
            </div>`;

        setTimeout(function() {
            window.location.href = "index.html";
        }, 1500);
    });
}


// =====================================
// REGISTER DEMO
// =====================================

function showRegister() {

    const email = prompt(
        "Enter your email to create an account:"
    );

    if (email) {

        alert(
            "Demo account created successfully for " + email
        );
    }
}
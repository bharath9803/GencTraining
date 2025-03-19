$(document).ready(function(){
    console.log("Document is ready");
    $('#userLoginBtn').click(function() {
        console.log("User Login Button Clicked");
        $('#userLoginForm').show();
        $('#adminLoginForm').hide();
    });
    $('#adminLoginBtn').click(function() {
        console.log("Admin Login Button Clicked");
        $('#adminLoginForm').show();
        $('#userLoginForm').hide();
        $('#adminDummyBtn').click(function() {
            window.location.href = "../admin/adminpanel.html"; 

        });
    });
    $('#login-container').slideDown(1000); 
    $('#home').css({
        display: 'none', 
        opacity: 0 
    }).animate({
        opacity: 1,
        height: "toggle", 
        width: "toggle" 
    }, 2000,function(){
        

    });
    $('.navbar').fadeIn(4000);
    
});
//admin page graph

//regbike
//regbike post request
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerBikeForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const bike = {
            brand: document.getElementById('brandSelect').value,
            model: document.getElementById('model').value,
            regNo: document.getElementById('regNo').value,
            ownerName: document.getElementById('ownerName').value,
            contact: document.getElementById('contact').value
        };

        fetch('http://localhost:8080/bikes/register', { // Ensure this URL matches your Spring Boot server
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bike)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
    });
});

// Slot Booking
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('slotbook').addEventListener('submit', function(event) {
        event.preventDefault();
        const slot = {
            bikeModel: document.getElementById('bikeModel').value,
            serviceType: document.getElementById('serviceType').value,
            date: document.getElementById('date').value,
            timeSlot: document.getElementById('timeSlot').value,
            comments: document.getElementById('comments').value
        };

        fetch('http://localhost:8080/slots/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(slot)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
    });
});
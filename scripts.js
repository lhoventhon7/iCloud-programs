// Global variables for countdown
let countdownTime = 10;
let countdownInterval;

function showAd(adLink, downloadLink) {
    // Show the modal
    $('#adModal').modal('show');
    
    // Load ad into iframe
    $('#adFrame').attr('src', adLink);

    // Reset and start the countdown timer
    countdownTime = 10;
    $('#countdown').text(countdownTime);
    $('#closeAdBtn').prop('disabled', true);

    countdownInterval = setInterval(function () {
        countdownTime--;
        $('#countdown').text(countdownTime);

        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            $('#closeAdBtn').prop('disabled', false); // Enable "Close Ad" button
            window.location.href = downloadLink; // Redirect to download link after countdown
        }
    }, 1000);
}

$('#adModal').on('hide.bs.modal', function () {
    clearInterval(countdownInterval); // Stop countdown if modal is closed manually
});

$('#closeAdBtn').click(function () {
    $('#adModal').modal('hide');
});

// Announcement Messages
let messages = [
    "Welcome to our tool site! Get the latest iCloud bypass tools here.",
    "Check out our newest iPhone iCloud bypass programs!",
    "Need help? Visit our support page for assistance."
];

let messageIndex = 0;

function rotateMessages() {
    messageIndex = (messageIndex + 1) % messages.length;
    document.getElementById('announcement-message').textContent = messages[messageIndex];
}

// Rotate every 5 seconds
setInterval(rotateMessages, 5000);
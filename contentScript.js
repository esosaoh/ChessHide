// contentScript.js

// Function to hide opponent information and preserve user's information
function hideOpponentInformation() {
    // Select elements containing opponent information
    let opponentAvatar = document.querySelector('.player-component.player-top .player-avatar img');
    let opponentUsername = document.querySelector('.player-component.player-top .user-username-component');
    let opponentClock = document.querySelector('.player-component.player-top .clock-component');

    // Hide opponent information
    if (opponentAvatar) {
        opponentAvatar.style.display = 'none'; // Hide opponent avatar
    }
    if (opponentUsername) {
        opponentUsername.style.display = 'none'; // Hide opponent username
    }
    if (opponentClock) {
        opponentClock.style.display = 'block'; // Show opponent clock
    }

    // Show user information (your own)
    let userAvatar = document.querySelector('.player-avatar-component img');
    let userUsername = document.querySelector('.user-username-component');
    let userClock = document.querySelector('.clock-component');

    if (userAvatar) {
        userAvatar.style.display = 'block'; // Show user avatar
    }
    if (userUsername) {
        userUsername.style.display = 'block'; // Show user username
    }
    if (userClock) {
        userClock.style.display = 'block'; // Show user clock
    }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    hideOpponentInformation();
});

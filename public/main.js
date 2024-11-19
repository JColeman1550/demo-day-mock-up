let total = 0; // Pitch count for the session
let zoneClicks = {}; // Object to track pitches in each zone (e.g., "1-1": 3)
let canClickZone = false; // Flag to track if the user is allowed to click the zones

Array.from(document.querySelectorAll('.increment-button')).forEach(function(element) {
  element.addEventListener('click', function() {
    total++;
    canClickZone = true; // Allow the user to click a zone after incrementing
    document.querySelector('#pitch-count').textContent = total;
  });
});

Array.from(document.querySelectorAll('.decrement-button')).forEach(function(element) {
  element.addEventListener('click', function() {
    if (total > 0) {
      total--;
      canClickZone = true; // Allow the user to click a zone after decrementing
      document.querySelector('#pitch-count').textContent = total;
    }
  });
});

Array.from(document.querySelectorAll('.end-session-button')).forEach(function(element) {
  element.addEventListener('click', function() {
    // Log the previous pitch count and the zones clicked
    let previousData = { totalPitches: total, zoneClicks: zoneClicks };
    let sessionHistory = JSON.parse(localStorage.getItem('sessionHistory')) || [];
    sessionHistory.push(previousData);
    localStorage.setItem('sessionHistory', JSON.stringify(sessionHistory));

    // Display the session info
    alert(`Session ended! Total pitches: ${total}\nZone Clicks: ${JSON.stringify(zoneClicks)}`);

    // Reset the session data
    total = 0;
    zoneClicks = {}; // Reset the zone click counts
    canClickZone = false; // Disable zone clicks until increment/decrement happens
    document.querySelector('#pitch-count').textContent = total;

    // Optionally, show the log of previous sessions
    displayPreviousSessions();

    // Reset the display of each strike zone
    document.querySelectorAll('.strikezone-box').forEach(box => {
      box.textContent = ''; // Clear the pitch count in each square
    });
  });
});

Array.from(document.querySelectorAll('.strikezone-box')).forEach(function(element) {
  element.addEventListener('click', function(event) {
    if (!canClickZone) {
      alert('Please increment or decrement the pitch count before clicking a zone!');
      return;
    }

    // Get the position of the clicked square
    const x = event.target.dataset.x;
    const y = event.target.dataset.y;
    const zoneKey = `${x}-${y}`; // Unique key for each zone

    // Update the pitch count for that zone
    if (zoneClicks[zoneKey]) {
      zoneClicks[zoneKey]++;
    } else {
      zoneClicks[zoneKey] = 1;
    }

    // Log the click on the zone
    event.target.textContent = `Pitches: ${zoneClicks[zoneKey]}`; // Display count in the square

    // Disable further zone clicks until increment/decrement happens
    canClickZone = false;
  });
});

function displayPreviousSessions() {
  let sessionHistory = JSON.parse(localStorage.getItem('sessionHistory')) || [];
  if (sessionHistory.length > 0) {
    let logMessage = 'Previous Sessions:\n';
    sessionHistory.forEach((session, index) => {
      logMessage += `Session ${index + 1}: Total Pitches: ${session.totalPitches}, Zone Clicks: ${JSON.stringify(session.zoneClicks)}\n`;
    });
    alert(logMessage); // Display previous session logs
  }
}

// Call this function to display previous session history when the page loads
window.onload = displayPreviousSessions;

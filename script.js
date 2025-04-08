
const timeZones = {
    "South Africa": "Africa/Johannesburg",
    "New York": "America/New_York",
    "Tokyo": "Asia/Tokyo",
  };
  
 
  const locationSelect = document.getElementById('location-select');
  const timeDisplay = document.getElementById('time');
  const currentLocation = document.getElementById('current-location');
  const homeLink = document.getElementById('home-link');
  
  
  function updateTime(location) {
    const timeZone = timeZones[location];
    
    const timeInZone = moment.tz(timeZone).format('MMMM Do YYYY, h:mm:ss A');
    
    timeDisplay.textContent = `Time in ${location}: ${timeInZone}`;
    currentLocation.textContent = `Current Location: ${location}`;
  
    
    homeLink.style.display = location !== 'South Africa' ? 'inline-block' : 'none';
  }
  
  
  function getUserTime() {
    const userTime = moment().format('MMMM Do YYYY, h:mm:ss A');
    timeDisplay.textContent = `Your local time: ${userTime}`;
    currentLocation.textContent = `Current Location: Your Local Time`;
    homeLink.style.display = 'none';
  }
  
 
  locationSelect.addEventListener('change', function() {
    const selectedLocation = locationSelect.value;
    updateTime(selectedLocation);
  });
  
 
  getUserTime();
  
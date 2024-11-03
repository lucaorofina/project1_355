window.onload = function () { //when window loads fully
    const timeSelect = document.getElementById('time');
    const openTime = 11;  // 11m
    const closeTime = 20; //8pm

    // Generate time options in 15 min intervals
    for (let hour = openTime; hour <= closeTime; hour++) {
        for (let minutes = 0; minutes < 60; minutes += 15) {
            const timeValue = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
            const timeText = `${formatAMPM(hour, minutes)}`;
            const option = new Option(timeText, timeValue);
            timeSelect.add(option);
        }
    }
};

// time can either be or AM/PM, not 24 hour clock
function formatAMPM(hour, minutes) {
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12; // Convert to 12-hour format
    return `${hour12}:${String(minutes).padStart(2, '0')} ${ampm}`;
}

document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault(); // form wont reload the page

    // Get form values
    const name = document.getElementById('reservation-name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    const phone = document.getElementById('reservation-phonee').value;
    const notes = document.getElementById('reservtion-notes')
   
    // new reservation object
    const reservationData = {
        name: name,
        date: date,
        time: time,
        guests: guests,
        phone: phone,
        notes: notes
    };

    //save to clients browser 
    localStorage.setItem('reservation', JSON.stringify(reservationData));
    
    //save to database 
    saveReservationToBackend(reservationData);


//function saveReservationToBackend(data) {
    fetch('http://localhost:5000/reservations', { //must update to heroku 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    //error handling
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });

})
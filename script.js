(function(){
    'use strict'
    document.getElementById("convert").addEventListener("submit", function (event) {
        event.preventDefault();
    
        // Get the value that is logged by the user & Changes the string to the number.
        const distance = parseFloat(document.getElementById('distance').value);
        const answer = document.getElementById('answer');
    
        if (distance) {
            //convert and display
            const conversion = (distance * 1.609344).toFixed(3);
    
            
            answer.innerHTML = `<h2>${distance} miles conerts to ${conversion} kilometers<h2>`;
        }
        else {
            //display an error
            answer.innerHTML = `<h2>Please insert a number<h2`;
        }
    });
}());
    
    
    
    
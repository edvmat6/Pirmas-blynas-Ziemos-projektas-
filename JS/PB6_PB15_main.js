
// PB6 ir PB15 JS dalies pradzia
 
function scheduleDemoButton() {
    var emailRegex = /\S+@\S+\.\S+/;
    var email = document.getElementById('emailInput').value;

    var lietuviskiSimboliai = /[ąčęėįšųūž]/i.test(email);
    var specSimboliaiMasyvas = "!@#$%^&*(),.?\":{}|<>";

    var emailas = email.split('@')[0];

    var specSimboliai = [...emailas].some(char => specSimboliaiMasyvas.includes(char));

    if (email === "") { 
        alert('Įveskite el. paštą.')
        return false;;
    } else if (!emailRegex.test(email)) {
        alert('Įsitikinkite ar el. paštas tinkamo formato.')
        return false;;
    } else if (email.length > 20) {
        alert('El. paštas turi būti ne ilgesnė kaip 20 simbolių.');
    } else if (lietuviskiSimboliai || specSimboliai) {
        alert('El. pašto adrese negali būti lietuviškų raidžių arba spec. simbolių.');
    } else {
        alert('Sveiki!');
    }

    
}
document.getElementById('emailInput').addEventListener('keydown', function (event) {
    // Check if the pressed key is "Enter" (key code 13)
    if (event.keyCode === 13) {
        // Prevent the default behavior of the Enter key (e.g., new line in a text area)
        event.preventDefault();

        // Trigger the click event on the schedule demo button
        document.getElementById('scheduleDemoButton').click();
    }
});



// PB6 ir PB15 JS dalies pabaigas
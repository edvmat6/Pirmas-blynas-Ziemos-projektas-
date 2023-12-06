
// PB-2 EMAIL LAUKAS

function scheduleDemo() {
    var email = document.getElementById('email').value;

    var lietuviskiSimboliai = /[ąčęėįšųūž]/i.test(email);
    var specSimboliaiMasyvas = "!@#$%^&*(),.?\":{}|<>";

    var emailas = email.split('@')[0];

    var specSimboliai = [...emailas].some(char => specSimboliaiMasyvas.includes(char));

    if (email === "") { 
        alert('Įveskite el. paštą.');
    } else if (email.length > 20) {
        alert('El. paštas turi būti ne ilgesnė kaip 20 simbolių.');
    } else if (lietuviskiSimboliai || specSimboliai) {
        alert('El. pašto adrese negali būti lietuviškų raidžių arba spec. simbolių.');
    } else {
        alert('Sveiki!');
    }
}

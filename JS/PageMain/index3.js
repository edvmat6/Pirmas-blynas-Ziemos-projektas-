
// PB-2 EMAIL LAUKAS

function scheduleDemo3() {
    var email = document.getElementById('eMail').value.trim();

    var lietuviskiSimboliai = /[ąčęėįšųūž]/i.test(email.split('@')[0]);

    var specSimboliaiMasyvas = "!#$%^&*()',?\":{}|<>";

    var emailas = email.split('@');
    var specSimboliai = [...emailas[0]].some(char => specSimboliaiMasyvas.includes(char));

    var etSimboliai = email.split('@').length === 2;
    var poAtSimbolioSimboliai = emailas[1].length >= 3;

    var ilgisIkiAtSimbolio = emailas[0].length <= 20;

    if (email === "" || !etSimboliai || !poAtSimbolioSimboliai) {
        alert('Įveskite el. paštą.');
    } else if (!ilgisIkiAtSimbolio) {
        alert('El. paštas turi būti ne ilgesnė kaip 20 simbolių.');
    } else if (lietuviskiSimboliai || specSimboliai || !etSimboliai) {
        alert('El. pašto adrese negali būti lietuviškų raidžių, spec. simbolių.');
    } else {
        alert('Jūs teisingai įvedėte el. pašto adresą!');
    }
    
    document.getElementById('name').value = '';
    document.getElementById('eMail').value = '';
    document.getElementById('compName').value = '';
    document.getElementById('title').value = '';
    document.getElementById('message').value = '';
    document.getElementById('checkbox').checked = false;
}
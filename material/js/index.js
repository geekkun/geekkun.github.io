
document.getElementById('sign-form').addEventListener('submit', function(evt) {
    evt.preventDefault();
    var firstname = evt.target.elements.email.value;
    var lastname = evt.target.elements.password.value;
    var greeting = 'Hello';
    var guide = evt.target.elements.checkbox;
    if (firstname || lastname) {
        greeting += ', ';
        if (firstname && lastname) {
            greeting += firstname + ' ' + lastname;
        } else if (lastname) {
            greeting += 'Mx. ' + lastname;
        } else {
            greeting += firstname;
        }
    }
    greeting += '!';
    // greeting += '\n' + guide.checked? True : False;

    document.getElementById('greeting').textContent = greeting;
});

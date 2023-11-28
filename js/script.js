/* typing animation */
var typed = new Typed(".typing", {
    strings: ["", "Web Developer", "Web Designer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// var btn = document.getElementById("btnSendMsg");
// btn.addEventListener("click", function(e) {
//     e.preventDefault();
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var subject = document.getElementById("subject").value;
//     var message = document.getElementById("message").value;
//     var body = 'name: '+ name + '<br>email: ' + email + '<br>subject: ' + subject + '<br>message: ' + message;

    // smtpjs
function sendEmail() {  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var body = 'name: '+ name + '<br>email: ' + email + '<br>subject: ' + subject + '<br>message: ' + message;

    Email.send({
        SecureToken : "5989b55d-fd02-47e5-bacf-04bf5fc5df40",
        To : 'jcnichols22@gmail.com',
        From : 'jcnichols22@gmail.com',
        Subject : 'Contact Message',
        Body : body
    }).then(
      message => alert(message)
    );
}


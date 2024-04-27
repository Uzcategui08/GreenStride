const form = document.querySelector("form");
const fullName = document.getElementById("name");
const lastName = document.getElementById("lastName");
const subject = document.getElementsByClassName("subject");
const phone = document.getElementById("phone");
const zip = document.getElementById("zip");
const direction = document.getElementById("floatingTextarea2");

function sendEmail(){

    const bodyMessage = `Full Name: ${fullName.value} ${lastName.value}<br> Phone Number: ${phone.value}<br>
    Zip Code: ${zip.value}<br> Direction: ${direction.value}`;

    Email.send({
        SecureToken:"ee64494f-42ba-44fc-9b8a-ffdb5ad511c0",
        To : 'greenstridemarketing@gmail.com',
        From : "greenstridemarketing@gmail.com",
        Subject : "New client!",
        Body : bodyMessage
    }).then(
        message =>{
            if(message == "OK" ){
                Swal.fire({
                    title: "Thank You",
                    text: "Message sent succesfully!",
                    icon: "success"
                });
            }
        }
    );
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    sendEmail();

    form.reset();
    return false;
});

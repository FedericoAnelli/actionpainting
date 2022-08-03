// DOM Elements
let fullName = document.getElementById("inputName");
let company = document.getElementById("inputCompany");
let phone = document.getElementById("inputPhone");
let email = document.getElementById("inputEmail");
let content = document.getElementById("inputContent");
let sendEmail = document.getElementById("sendEmail");

function sendmail() {
        var contactParams = {
            from_name: fullName.value,
            from_email: email.value,
            message: "Phone: "+phone.value+"\nCompany: "+company.value+"\nMessage:\n"+content.value
        };
        console.log(contactParams);
        emailjs.send('service_gkq2fd5', 'template_23zs7jg', contactParams).then(function (res) {})
}

sendEmail.addEventListener("click", ()=>{
    sendmail();
    console.log("Email Sent");  
    });
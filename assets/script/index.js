function scrollToTarget() {
    var targetElement = document.getElementById("target");
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // These IDs are your EmailJS Service ID, Template ID, and your public key
    const serviceID = 'service_ti9xi9n';
    const templateID = 'template_rhlwjkd';

    // Send the email
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message sent!');
        }, (err) => {
            alert(JSON.stringify(err));
        });
});

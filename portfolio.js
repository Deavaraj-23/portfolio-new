function sendMail() {
    var params={
        from_name:document.getElementById('fullname').value,
        email_id:document.getElementById('email_id').value,
        message : document.getElementById('message').value
    }
    emailjs.send("service_fx8zzbj","template_fc5d8fb",params).then(function(res) {
        alert("success!");
    })

    console.log(params);
    
}

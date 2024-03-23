let countDownDate = new Date("Apr 5, 2024 00:00:01");

let counter = setInterval(() =>{

    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);

    document.querySelector("#days").innerHTML = days;
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }

}, 1000);


function emailSend(){
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var messageBody = "name \t\t" + name +
    "<br/> phone\t\t" + phone +
    "<br/> email\t\t" + email ;

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ouahmanemadani189@gmail.com",
    Password : "504B6E9E85B3D01F27DA15992F0F7E5FD439",
    To : 'm.ouahmane@mundiapolis.ma',
    From : "ouahmanemadani189@gmail.com",
    Subject : "This is the subject",
    Body : "New user is here <br/>" + messageBody ,
}).then(
  message => alert("form has been sent succesfully")
);
}

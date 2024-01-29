const container = document.querySelector('.container');
const header = document.querySelector('.header_text');
const yesBtn = document.querySelector('#yesButton');
const image = document.querySelector('img');
const question = document.querySelector('.question');

const containerRect = container.getBoundingClientRect();


yesBtn.addEventListener('click',()=>{
    header.innerHTML='';
    question.innerHTML='';
    image.src="yes.gif";

    // Hide the buttons
    document.querySelector('.button').style.display = 'none';

     // Delay for 4 seconds and then change the image and header text
     setTimeout(() => {
        image.src = 'coffee.gif';
        header.innerHTML = 'Lets make every sip matter';
        question.innerHTML='';
    }, 2000);

    // Add the running-text class
    header.classList.add('later-text');
    
}); 

function sendSMS() {
    // Make an HTTP POST request to your local server
    $.post('http://localhost:3000/send-sms', function (data) {
        console.log(data);
     });
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - 
        document.getElementById('noButton').offsetWidth - 85);
    var y = Math.random() * (window.innerHeight - 
        document.getElementById('noButton').offsetHeight - 48);
    document.getElementById('noButton').style.left = x + 'px';
    document.getElementById('noButton').style.top = y + 'px';
}
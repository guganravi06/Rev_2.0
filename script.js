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
   // Make an HTTP POST request to your server
  $.ajax({
    url: 'https://to-my-mirror.netlify.app/send-sms',
    method: 'POST',
    data: {
      phoneNumber: '+919524003387', // Replace with the actual phone number
      message: 'She said yes on your website!', // Replace with the actual message
    },
    success: function (data) {
      console.log(data);
    },
    error: function (error) {
      console.error('Error sending SMS:', error.responseText);
      // Handle the error as needed, such as showing a user-friendly message
    },
  });
}

function moveButton() {
   var containerRect = document.querySelector('.container').getBoundingClientRect();
    var noButton = document.getElementById('noButton');
    
    // Log container dimensions for debugging
    console.log('Container Dimensions:', containerRect);

    var x = Math.random() * (containerRect.width - noButton.offsetWidth);
    var y = Math.random() * (containerRect.height - noButton.offsetHeight);

    // Log the random coordinates for debugging
    console.log('Random Coordinates:', { x, y });

    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
}

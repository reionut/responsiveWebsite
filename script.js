// Toggle for about us section

var hideAboutUs = false;

document.querySelector('#aboutButton').addEventListener('click', function(){
  hideAboutUs = !hideAboutUs;
  if (hideAboutUs === true) {
    console.log(123)
    document.querySelector('#aboutContainer').className = 'container hide';
    aboutImgRotate.style.transform = 'rotate(180deg)';
  } else {
    document.querySelector('#aboutContainer').className = 'container';
    aboutImgRotate.style.transform = 'rotate(360deg)';
  }
});

// Swap phone images bottun

var phones = ['images/phone1.png', 'images/phone2.png', 'images/phone3.png', 'images/phone4.png'];
document.querySelector('#swapButton').addEventListener('click', function(){
  
  var currentPath = document.querySelector('#phoneImage').getAttribute('src');
  var currentIndex = phones.indexOf(currentPath);
  var limit = phones.length - 1;
  
  if (currentIndex === limit) {
    document.querySelector('#phoneImage').setAttribute('src', phones[0])
  } else {
    document.querySelector('#phoneImage').setAttribute('src', phones[currentIndex + 1])
  }  
});

//Section 4

document.getElementById('s4Button').addEventListener('click', function () {
  var name = document.getElementById('nameInput').value;
  document.getElementById('nameOutput').innerHTML = name;
   var email = document.getElementById('emailInput').value;
  document.getElementById('emailOutput').innerHTML = email;
   var phone = document.getElementById('phoneInput').value;
  document.getElementById('phoneOutput').innerHTML = phone;
   var message = document.getElementById('messageInput').value;
  document.getElementById('messageOutput').innerHTML = message;
});
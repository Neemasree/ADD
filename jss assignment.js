//function
function multiply(a, b) {
    return a * b;
  }
  console.log(multiply(5, 3));

  //checksign
  
  function checkSign(number) {
    if (number > 0) {
      return 'Positive';
    } else if (number < 0) {
      return 'Negative';
    } else {
      return 'Zero';
    }
  }
  console.log(checkSign(5)); 
  console.log(checkSign(-3)); 
  console.log(checkSign(0)); 

  //square

  function square(number) {
    return number * number;
  }
  console.log(square(4));
console.log(square(-3));

//concordinate string

function concatenateStrings(str1, str2) {
  return str1 + str2;
}
console.log(concatenateStrings('Hello', ' World'));

//minutes to seconds

function minutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(minutesToSeconds(30));  

//click button
    document.addEventListener('DOMContentLoaded',function(){
      const button =document.getElementById('myButton');
      button.addEventListener('click',function(){
          alert('Button clicked');
      })
  })

  //background-colour change

  document.addEventListener('DOMContentLoaded',function(){
    const paragraph=document.getElementById('myParagraph');
    paragraph.addEventListener('mouseover',function(){
        paragraph.style.backgroundColor='yellow';
    }); 
    paragraph.addEventListener('mouseout',function(){
        paragraph.style.backgroundColor='';
        paragraph,this.style.transition ='0.5s ease-in-out';
    });
});

//text style

document.addEventListener('DOMContentLoaded',function(){
  const inputField=document.getElementById('press and key');
  inputField.addEventListener('keypress',function(event){
      console.log('key pressed:',event.key);
      window.alert(event.target.value);
  });
});

//double click

document.addEventListener('DOMContentLoaded',function(){
  const paragraph=document.getElementById('changeText');
  paragraph.addEventListener('dblclick',function(){
      paragraph.textContent='double clicked';
  });
});

 //validate form
 function validateForm() {
  // Validate text input (e.g., name)
  const nameInput = document.getElementById('name');
  if (!validateTextInput(nameInput)) {
    alert("Name cannot be empty!");
    return false;
  }
  function validateTextInput(input) {
      const value = input.value.trim();
      return value !== '';
    }
  // Validate email
  const emailInput = document.getElementById('email');
  if (!validateEmailInput(emailInput)) {
    alert("Invalid email format!");
    return false;
  }
  function validateEmailInput(input) {
      const value = input.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    }
  // Validate password
  const passwordInput = document.getElementById('password');
  if (!validatePasswordInput(passwordInput)) {
    alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.");
    return false;
  }
  function validatePasswordInput(input) {
      const value = input.value.trim();
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      return passwordRegex.test(value);
    }
  // Validate confirm password
  const confirmPasswordInput = document.getElementById('confirmPassword');
  if (!validateConfirmPasswordInput(passwordInput, confirmPasswordInput)) {
    alert("Passwords do not match!");
    return false;
  }
  function validateConfirmPasswordInput(passwordInput, confirmPasswordInput) {
      const passwordValue = passwordInput.value.trim();
      const confirmPasswordValue = confirmPasswordInput.value.trim();
      return passwordValue === confirmPasswordValue;
    }
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
        alert('Form submitted successfully!');
      }
    });
  return true;
}

//go to the another page

document.addEventListener('DOMContentLoaded', function() {
  // Get the button element by its ID
  const button = document.getElementById('redirectButton');

  // Add an event listener for the click event
  button.addEventListener('click', function() {
    window.location.href =https://github.com/user/repo.git.; 
  });
});

//go to home

document.addEventListener('DOMContentLoaded', function() {
  // Get the link element by its ID
  const link = document.getElementById('homeLink');

  // Add an event listener for the click event
  link.addEventListener('click', function(event) {
    // Prevent the default link behavior (which is to follow the href)
    event.preventDefault();

    // Redirect the user to the home page (example: 'index.html')
    window.location.href = 'index.html'; // Replace with your home page URL
  });
})
function validateInput(input) {
  if (isNaN(input)) {  // Check if the input is not a number
    throw new Error('Invalid input: Please provide a valid number.');
  }
  return 'Valid input';
}
try {
  console.log(validateInput(5));        // Valid input
  console.log(validateInput('hello'));  // Throws an error
} catch (error) {
  console.log(error.message);           // Handle the error and display the message
}
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b; // Perform division
  } catch (error) {
    console.log(error.message);  // Handle the error by logging the message
    return null;  // Return null or any other appropriate response for division by zero
  }
}
console.log(divide(10, 2));  // Output: 5
console.log(divide(10, 0));  // Output: "Cannot divide by zero"



const loginForm = document.getElementById('LoginForm');

loginForm.addEventListener('submit', function(event){
    event.preventDefault();

const email = document.getElementById('email');
const password = document.getElementById('password');

if(email.value ==='akhil@gmail.com' && password.value ==='akhil123'){
      window.location.href = 'dashboard.html';
} else {
    alert('Invalid Credentials');
    
}   






  

});
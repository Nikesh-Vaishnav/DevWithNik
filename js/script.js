document.addEventListener('DOMContentLoaded', function () {
    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        alert('Login submitted!');
        const loginModal = bootstrap.Modal.getInstance(document.getElementById('login'));
        loginModal.hide();
      });
      
    }
  
    // Handle signup form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
      signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        alert('Sign Up submitted!');
        const signupModal = bootstrap.Modal.getInstance(document.getElementById('signup'));
        signupModal.hide();
      });
    }
  });
  
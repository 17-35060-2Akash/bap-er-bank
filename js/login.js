document.getElementById('btn-submit').addEventListener('click', function (event) {
    // console.log('Submit Button');
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const password = document.getElementById('user-password').value;
    console.log(password);
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid id or password!');
    }
})
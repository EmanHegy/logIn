var userEmail = document.querySelector('#userEmail');
var userPassword = document.querySelector('#userPassword');
var logIn = document.getElementById('logIn');

var userDataList = [];

function logInValidation(email,password) {
    if (localStorage.getItem('userDataList') != null) 
    {
        var returnedName = '';
        userDataList = JSON.parse(localStorage.getItem('userDataList'));
        for (var i = 0; i < userDataList.length; i++) {
            if (userDataList[i].email == email.value && userDataList[i].password == password.value)
            {
                returnedName = userDataList[i].name; 
            }
        }
        return returnedName;
    }
}


function isEmpty(useInput) {
    if (useInput.value == '') {
        return true;
    }
    return false;
}

logIn.addEventListener('click', function(){
    if (isEmpty(userEmail) || isEmpty(userPassword)) {
        validationMsg.innerHTML = 'All inputs is required';
    } 
    else if (logInValidation(userEmail,userPassword) == '') 
    {
        document.querySelector('#validationMsg').innerHTML = 'incorrect email or password';
    }
    else {
        var x=logInValidation(userEmail,userPassword);
        var user=localStorage.setItem('user',x )
        window.location.href="home.html";
    } 
})
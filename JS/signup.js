var userName = document.querySelector('#userName');
var userEmail = document.querySelector('#userEmail');
var userPassword = document.querySelector('#userPassword');
var signUp = document.getElementById('signUp');
var validationMsg = document.querySelector('#validationMsg');
var userDataList = [];

function setData() {
    var userData = {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value
    }
    userDataList.push(userData);
    localStorage.setItem('userDataList', JSON.stringify(userDataList));
}

function isEmailExist(email) {
    if (localStorage.getItem('userDataList') != null) 
    {
        var flag = false;
        userDataList = JSON.parse(localStorage.getItem('userDataList'));
        for (var i = 0; i < userDataList.length; i++) {
            if (userDataList[i].email == email.value) {
                flag = true;
            }
        }
        return flag;
    }
}

function isEmpty(useInput) {
    if (useInput.value == '') {
        return true;
    }
    return false;
}


signUp.addEventListener('click', function(){
    if (isEmailExist(userEmail)) {
        validationMsg.innerHTML = 'email already exists';
    }
    else if (isEmpty(userName) || isEmpty(userEmail) || isEmpty(userPassword)) {
        validationMsg.innerHTML = 'All inputs is required';
    }            
    else{
        setData();
        validationMsg.innerHTML = 'success';
        validationMsg.style.color = '#28a745 !important';
    }
})

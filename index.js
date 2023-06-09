var username = 'student';
var password = 'Password123';
var count = 0;
function check_login(){
    event.preventDefault();
    let update = document.getElementById('span')
    let entered_username = document.getElementById('username').value;
    let entered_password = document.getElementById('password').value;
    if(entered_password == password && entered_username == username){
        update.textContent = 'Login Succesfull';
    }
    else{
        update.textContent = 'Invalid Details';
    }
}

function dark_mode(){

    if(count %2 == 0){
    document.body.style.background = 'rgba(0,0,0,0.7)';
    document.getElementById('dark').style.background = 'rgba(0,0,0,0.7)';
    document.getElementById('nav').style.background = 'unset';    
    document.getElementById('content1').style.color = 'white';
    document.getElementById('content2').style.color = 'white';
    document.getElementById('content3').style.color = 'white';
    document.getElementById('content4').style.color = 'white';
    document.getElementById('content5').style.color = 'white';
    document.getElementById('username').style.background = 'rgba(0,0,0,0.5)';
    document.getElementById('password').style.background = 'rgba(0,0,0,0.5)';
    document.getElementById('username').style.color = 'white';
    document.getElementById('password').style.color = 'white';
    count++;
}
else{
        document.getElementById('username').style.color = 'black';
        document.getElementById('password').style.color = 'black';
        document.getElementById('content1').style.color = 'black';
        document.getElementById('content2').style.color = 'black';
        document.getElementById('content3').style.color = 'black';
        document.getElementById('content4').style.color = 'black';
        document.getElementById('content5').style.color = 'black';
        document.getElementById('username').style.background = 'white';
        document.getElementById('password').style.background = 'white';
        document.getElementById('items').style.color = 'white'
        document.body.style.background = 'white';
        document.getElementById('dark').style.background = 'black';
        document.getElementById('nav').style.background = 'black';
        count++;
    }

}
const id = document.getElementById('userid')
const email = document.getElementById('useremail')
const password = document.getElementById('userpw')
const pw_re = document.getElementById('userpw_re')
const nickname = document.getElementById('usernick')
const sign_up = document.querySelector('#signup')
const font = document.querySelector('#btn_font')

const showErrorId = document.querySelector(".errorId") 
const showErrorNick = document.querySelector(".errorNick")
const showErrorEmail = document.querySelector(".errorEmail")
const showErrorPw = document.querySelector(".errorPw")
const showErrorPw_re = document.querySelector(".errorPw_re")

const showAcceptId = document.querySelector(".acceptId") 
const showAcceptNick = document.querySelector(".acceptNick")
const showAcceptEmail = document.querySelector(".acceptEmail")
const showAcceptPw = document.querySelector(".acceptPw")
const showAcceptPw_re = document.querySelector(".acceptPw_re")
sign_up.disabled = true
if(sign_up.disabled){
     sign_up.style.border = "1px solid gray";
     sign_up.style.backgroundColor = "gray";
     font.style.color = "black"
}

let isError = {
    id:false,
    email:false,
    password:false,
    pw_re:false,
    nickname:false
}
let pwvalid = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
let emvalid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i


id.onkeyup = function () {
    if (id.value==="") {
        isError.id=false
        showAcceptId.classList.add('hidden')
        showErrorId.classList.remove('hidden')
    }
    else {
        isError.id=true
        showAcceptId.classList.remove('hidden')
        showErrorId.classList.add('hidden')
    }
  }
  nickname.onkeyup = function () {
    if (nickname.value.length<2||nickname.value.length>5) {
        isError.nickname=false
        
        showAcceptNick.classList.add('hidden')
        showErrorNick.classList.remove('hidden')
    }
    else {
        isError.nickname=true
        showAcceptNick.classList.remove('hidden')
        showErrorNick.classList.add('hidden')
    }
  }
  email.onkeyup = function () {
    if (!emvalid.test(email.value)) {
        isError.email=false
        showAcceptEmail.classList.add('hidden')
        showErrorEmail.classList.remove('hidden')
    }
    else {
        isError.email=true
        showAcceptEmail.classList.remove('hidden')
        showErrorEmail.classList.add('hidden')
    }
  }
  password.onkeyup = function () {
    if (!pwvalid.test(password.value)) {
        isError.password=false
        showAcceptPw.classList.add('hidden')
        showErrorPw.classList.remove('hidden')
    }
    else {
        isError.password=true
        showAcceptPw.classList.remove('hidden')
        showErrorPw.classList.add('hidden')
    }
  }
  pw_re.onkeyup = function () {
    if (password.value != pw_re.value) {
        isError.pw_re=false
        showAcceptPw_re.classList.add('hidden')
        showErrorPw_re.classList.remove('hidden')
    }
    else {
        isError.pw_re=true
        showAcceptPw_re.classList.remove('hidden')
        showErrorPw_re.classList.add('hidden')
        
    }
  }
  
  function button_check(){
    if(isError.id &&isError.nickname &&isError.email 
        &&isError.password &&isError.pw_re){
     sign_up.disabled= false
    }
    else{
        sign_up.disabled=true
    }
    if(sign_up.disabled){
        sign_up.style.border = "1px solid gray";
        sign_up.style.backgroundColor = "gray";
        font.style.color = "black"
    }
    else if(!(sign_up.disabled)){
        sign_up.style.border = "1px solid white";
        sign_up.style.backgroundColor = "rgba(226, 196, 221, 0.7)";
        font.style.color = "white"
    }
  }
  id.addEventListener('keyup',button_check)
  nickname.addEventListener('keyup',button_check)
  email.addEventListener('keyup',button_check)
  pw_re.addEventListener('keyup',button_check)
  password.addEventListener('keyup',button_check)
  sign_up.addEventListener('click',()=>{alert(nickname.value+"님 반갑습니다!")})
  
    

function randomInt() { // 1~9의 십진 난수 리턴
    return Math.floor(Math.random()*9) + 1;
    }
    
const mathTest = ()=>{
    let correctCount = 0;
    for(let i=0;i<=5;i++)
    {
        if(i===5){
            while(true){
                let finish = prompt("테스트는 종료되었습니다. 결과가 아쉬우면 재시도하셔도 됩니다. 다시 하시겠습니까?(예, 아니오로만 대답해주세요.)","");
                if(finish=="예"){
                    i=0;
                    break;
                }
                else if(finish=="아니오"){
                    break;
                }
                else continue;
            }
            
        }
        if(i===5){
            break;
        }
        let ques = randomInt() + "*" + randomInt();
// 사용자로부터 답 입력
        let user = prompt(ques + " 값은 얼마입니까?", 0);
        if(user == null) { // 취소 버튼이 클릭된 경우
            alert("안적으셨군요! 그럼 오답입니다.")
        }
        else {
        let ans = eval(ques); // 구구단 정답 계산
        if(ans == user) {// 정답과 사용자 입력 비교
        alert("정답! ");
        ++correctCount;
        }
        else
        alert("오답입니다.");
        }
        
    }
    if(correctCount===0){
        document.querySelector(".math-test").innerHTML = "<h2> 다 틀리셨군요 분발하세요</h2>"
    }
    else if(correctCount<=2){
        document.querySelector(".math-test").innerHTML= "<h2> 별로 못맞췄네요 분발하세요</h2>"
    }
    else if(correctCount<=4){
        document.querySelector(".math-test").innerHTML = "<h2>아쉽군요 충분히 좋은성적입니다.</h2>"
    }
    else if(correctCount===5){
        document.querySelector(".math-test").innerHTML = "<h2>다 맞추셨군요 축하드립니다.</h2>"
    }
}



function me (name, score) {
    this.univ = "상명대"; 
    this.name = name; 
    this.score = score; 
    this.getGrade = function () { 
    if(this.score >= 4)  document.querySelector(".answer").innerHTML = "<h2>굿굿</h2>"
    else if(this.score >= 3.5 && this.score < 4) {
        document.querySelector(".answer").innerHTML = "<h2>낫배드</h2>"
    }
    else if(this.score > 3.0 && this.score < 3.5) {
        document.querySelector(".answer").innerHTML = "<h2>흐음</h2>"
    }
    else {document.querySelector(".answer").innerHTML = "<h2>망했네</h2>"}
    }
}



const meClick =  ()=>{
    let getName = prompt("이름?: ","")
    let getScore = prompt("점수?: ",0)
   
    me(getName, getScore)

    const myscore = new me(getName, getScore);
    myscore.getGrade();
}

//2023.10.19일자
let box_opened = false;
function boxOpen() {
    let box = document.getElementById("giftbox");
    box.innerHTML= "<img src='./img/openbox.png'>"+"꽝 입니다!!!";
    box_opened=true;
}

function boxClose() {
    let box = document.getElementById("giftbox");
    box.innerHTML= "<img src='./img/closebox.png'>"+"상자를 다시 열어봅시다!";
    box_opened=false;
}

function GiftBox(){
    if(box_opened){
        boxClose();
    }
    else boxOpen();

}

function colorChange() {
let spanArray = document.getElementsByTagName("span");
for(let i=0; i<spanArray.length; i++) {
var span = spanArray[i];
span.style.color = "orchid";
span.style.fontSize = "20px";
}
} 
let count =0;
function controlDiv() {
    
    let obj = document.getElementById("parent");
    let newDIV = document.createElement("div");
    count += 1;
    newDIV.innerHTML = "새로 생성된 DIV입니다.<span>"+count+"</span>개 째.";
    newDIV.setAttribute("id", count);
    newDIV.style.background = "linear-gradient(170deg, #b259df,#9dc3c8 20% ,#7aefe3)";
    newDIV.style.height = "200px";
    newDIV.style.zIndex = "2";
    newDIV.onclick = function() {
    let p = newDIV;
     p.innerHTML = "클릭하셨네요!!("+this.id+"번째div)"; 
    };
    if(count<=4){
        obj.appendChild(newDIV);
        if(count> 3){
        newDIV.innerHTML = "3개를 넘어가셨군요! 이 이상 새로운 div가 생성되지 않습니다! 클릭해서 삭제하세요.";
        newDIV.onclick = function() {
            let p = this.parentElement; 
            p.removeChild(this); 
            };
        }
    }
    
    
    
    
}


let win=null;
function showHTML() {
if(win == null || win.closed)
win = window.open("","outWin", "width=500,height=500");
let textArea = document.getElementById("TextBox");
win.document.open();
win.document.write(textArea.value);
win.document.close();
}
//여기까지

let h1;
function init() { // 문서가 완전히 로드되었을 때 호출
    
    h1 = document.getElementById("h-1");
    h1.addEventListener("mouseover", over); 
    h1.addEventListener("mouseout", out); 
}
function over() {
document.querySelector("#h-1").innerHTML="<h1>메인페이지 입니다.<h1>"
}
function out() {
document.querySelector("#h-1").innerHTML="<h1>마우스를 떼셨군요.<h1>"
}

function query() {
    let ret = confirm("새로운사이트를 만드시겠습니까?");
    if(ret===true){
        showHTML();
    }
    else return false;
}
function findChecked() {
    let found = null;
    let kcity = document.getElementsByName("city");
    for(let i=0; i<kcity.length; i++) {
    if(kcity[i].checked == true)
    found = kcity[i];
    }
    if(found != null)
    alert(found.value + "이 선택되었음");
    else
    alert("선택된 것이 없음");
    }
    
    let newWin=null;
function load() {
    let setUrl = prompt("url을 입력하세요: ","https://")
    newWin = window.open(setUrl, "myWin",
    "left=300,top=300,width=400,height=300");
    let urlLink = confirm("해당사이트에 접속하시겠습니까? ")
    if(urlLink===true){
        alert("3초뒤에 접속됩니다.")
        setTimeout("newWin", 3000);
    }
    else return;
        
}
function closeNewWindow() {
    if(newWin==null || newWin.closed) 
    return; 
    else{
        
        if(urlLink===true){
            alert("3초뒤에 접속됩니다.")
            setTimeout("newWin.close()", 3000);
        }
        else return;
        } 
}

function GetCookie (name) {
    let str = name+"=";
    let pairs = document.cookie.split(";"); // 쿠키문자열을 ;을 경계로 분할
    for(let i=0; i<pairs.length; i++) {
    let pair = pairs[i].trim(); // 쿠키 앞뒤의 빈칸 제거
    let unit = pair.split("=");
    if(unit[0] == name)
    return unescape(unit[1]);
    }
    return null;
    }
function SetCookie (name, value, expireDate) {
    let cookieStr = name + "=" + escape(value) +
    ((expireDate == null)?"":("; expires=" + expireDate.toUTCString()));
    document.cookie = cookieStr;
}

let username = GetCookie("username");
let counter = GetCookie("count"); 
let expire = new Date ();
function cookieLog()
{
    
     // 현재 시간
    if (username == null) {
        counter = 0;
        username = prompt("이름을 입력해 주십시오.","");
        if (username == null) {
            alert("이름을 입력하시면 보다 나은 서비스를 제공받을 수 있습니다.");
            username = "unknown";
            } 
        else {
            expire.setTime(expire.getTime() + (7 * 24 * 3600 * 1000)); // 일주일
            SetCookie("username",username,expire);
        }
    }
    counter++;
    expire.setTime(expire.getTime() + (7 * 24 * 3600 * 1000)); // 일주일 후
    SetCookie("count",counter,expire);
    

   
}
 
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#h-1").innerHTML="<h1>메인페이지 입니다.<h1>"
   
    cookieLog(); 
    document.querySelector("#username").innerHTML=username+"님 반갑습니다.";
    document.querySelector("#counter").innerHTML=counter+"번 째 방문하셨군요!.";
    if (username !== "") {
        const deleteButton = document.createElement("button");
        deleteButton.style.width="100px"
        deleteButton.textContent = "로그아웃";
        deleteButton.addEventListener("click", function () {
            DeleteCookie("username");
        });
        const deleteNameElement = document.querySelector("#deleteName");
        if (deleteNameElement) {
            deleteNameElement.appendChild(deleteButton);
        }
    }
});

function DeleteCookie(name) {
    let expireDate = new Date();
    expireDate.setTime(expireDate.getTime() - 1); // 현재 시간 이전으로 설정하여 쿠키를 만료시킴
    let cookieStr = name + "=; expires=" + expireDate.toUTCString();
    document.cookie = cookieStr;
    location.reload(); // 페이지 새로 고침
}
    



    
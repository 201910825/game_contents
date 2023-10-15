
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
    
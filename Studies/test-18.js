// 서울에서 김서방 찾기
function solution(seoul) {
    var answer = '';

    for(var i = 0; i < seoul.length; i++) {
        if(seoul[i] === "Kim") answer = "김서방은 " + i + "에 있다"
    }


    return answer;
}

var seoul = ["Jane", "Kim"];
solution(seoul)

// solution.js by ick
function solution(seoul) {
    for (let i = 0; i <= seoul.length; i++) {
        if(seoul[i] == 'Kim') {
            return `김서방은 ${i}에 있다`;
        }
    }
    
}

// 자릿수 더하기
function solution(n)
{
    var answer = 0;

    let string = n.toString();


    for(let i = 0; i < string.length; i++) {
        answer += Number(string[i]);
    }


    return answer;
}

let n = 123;
solution(n)

// ick
function solution(n) {
    let answer = 0;
    let arr = String(n).split("");
    
    for (let i = 0; i < arr.length; i++) {
        answer += Number(arr[i])
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(answer)

    return answer;
}

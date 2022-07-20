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
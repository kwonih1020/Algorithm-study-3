// 가운데 글자 가져오기
$(document).ready(function() {
    function solution(s) {
        var answer = '';
        
        if(s.length % 2 == 0) {
            answer = s[s.length/2 - 1] + s[s.length/2]
        }else {
            answer = s[parseInt(s.length/2)] 
        }

        return answer;
    }

    // 문자열의 길이가 짝수 or 홀수 
    // → 짝수면 가운데 2글자
    // → 홀수면 가운데 1글자
    //  → 조건문을 사용해 짝수 홀수를 나눔
    // 문자열의 길이는 length 사용
    // 유리수 값은 parseInt 로 정수로 변환
    // ※ 문자열의 길이가 짝수일 때 규칙을 찾아 내는 것과 
    //    홀수일때 규칙을 찾아내서 해결방법을 찾아냈다 ※ 

    solution("abc")
    console.log(solution("abc"));

})
// 없는 숫자 더하기
function solution(numbers) {
    var answer = 0;

    var add_numbers = 0;
    for(var i = 0; i <= 9; i++) {
        add_numbers += i
    }
    var sum_numbers = numbers.reduce(function add(sum, currValue) {
        return sum + currValue;
    })

    answer = add_numbers - sum_numbers


    return answer;
}

var numbers = [1, 3]
solution(numbers)


// solution.js by ick
function solution(numbers) {
    let newNum = numbers.sort();
    let answer = 0;
    for (let i = 0; i < 10; i++) {
       if(!newNum.includes(i)) answer += i;
    }
    return answer;
}

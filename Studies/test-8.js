// 평균 구하기

// 문제 설명
  // 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
  // arr은 길이 1 이상, 100 이하인 배열입니다.
  // arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

// 입출력 예
  //   arr	    return
  // [1,2,3,4]	  2.5
  //   [5,5]	     5

// solution.js by ick
function solution(arr) {
    let answer = 0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    answers = arr.reduce(reducer);
    answer = answers / arr.length;
    return answer;
}

function solution(arr) {
  let answer = 0;
  for (let i = 0; i <arr.length; i++) {
      // answer += arr[i] / arr.length;
      answer = answer + arr[i] / arr.length 
  }
  return answer;
}

// // 수원
// // 평균 구하기
// function solution(arr) {
//   var answer = 0;

//   var add_arr = arr.reduce(function add(sum, cuurValue) {
//       return sum + cuurValue;
//   })

//   answer = add_arr / arr.length;
//   return answer;
// }

// var arr = [1,2,3,4]
// solution(arr);





// function solution(arr){
//   let sum = 0;
// for(let value of arr){
//   sum += value;
// }
// return sum/arr.length;
// }

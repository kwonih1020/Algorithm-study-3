// 하샤드 수

// 문제 설명
  // 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 조건
  // x는 1 이상, 10000 이하인 정수입니다.

// 입출력 예
  // arr	return
  // 10	true
  // 12	true
  // 11	false
  // 13	false

// 입출력 예 설명
// 입출력 예 #1
  // 10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.

// 입출력 예 #2
  // 12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.

// 입출력 예 #3
  // 11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.

// 입출력 예 #4
  // 13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다.

// solution.js by ick
function solution(x) {
  let answer = 0;
  // x 를 문자열로 변환 시켜줌과 동시에 ["1", "0"] 으로 변환 시켜준다.
  let arr = String(x).split("");
  
  // 반복문을 통해 ["1", "0"] 우선 Number를 통해 숫자로 바꿔주고, answer에 더해준다
  for (let i = 0; i < arr.length; i++) {
      answer = answer + Number(arr[i]);
  }
  
  // x 가 answer 값으로 나누어지는 검사한다.
  if (x % answer == 0) {
      return true;
  } else {
      return false;
  }
}

// 수원
// function solution(x) {
//   var answer = true;

//   // let str = x.toString()
//   // let arr = str.split("");
//   // let num = arr.map((x) => Number(x))
//   // let sum = num.reduce((sum, currValue) => sum + currValue)

//   let sum = x.toString().split("").map((x) => Number(x)).reduce((sum, currValue) => sum + currValue)

//   if(x % sum === 0) answer = true
//   else answer = false

//   console.log(answer)

//   return answer;
// }
// let x = 11
// solution(x);





// function solution(n){
//   var result ;
//   var sum = 0;
//   var arr = String(n).split('');
//   for(var i=0; i<arr.length; i++) {
//     sum += Number(arr[i]);
//   }
//   return n % sum == 0 ? true : false;
// }
// 정수 내림차순으로 배치하기

// 문제 설명
  // 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
  // n은 1이상 8000000000 이하인 자연수입니다.

// 입출력 예
  //   n	    return
  // 118372	  873211

// solution.js by ick
function solution(n) {
  return Number(n.toString().split("").sort((a,b) => b-a).join(''));
  // .toString()으로 우선 118372 => '118372'로 변화시켜주고, 
  // .split('')을 통해 각 숫자를 ''로 나눠줍니다, 해서 ['1', '1', '8', '3', '7', '2']이 만들어지고
  // 마지막에 .sort()를 통해 큰 숫자부터 순서를 재배열해주고
  // .join('')를 통해 배열을 하나의 문자열로 다시 변화해줍니다.
  // 마지막으로 제일 밖에 있는 Number()라는 내장함수로 문자열을 숫자로 변화 시켜줍니다.
}

// 수원
// // 내림차순으로 배치하기
// function solution(n) {
//   var answer = 0;
//   let str = n.toString()

//   let arr = str.split("");

//   arr2 = arr.sort((a,b) => b-a)

//   answer = Number(arr2.join(""))
  
//   return answer;
// }
// let n = 118372;
// solution(n)



// function solution(n) {
//   return n.toString().split("").sort().reverse().join("") * 1;
//   // .toString() : 문자열로 반환
//   // .split() : 문자열 나누기, join과 동일하게 쓸 것
//   // .sort() : 문자열 정렬 ex) 알파벳은 abc 순서로 자동정렬, 숫자는 123 순서로 자동정렬
//   // .reverse() : 문자열을 역순으로 정렬
//   // .join() : 앞서 split으로 나눈 것을 다시 이어붙이기, split과 동일하게 쓸 것
//   // parseInt() 문자열을 숫자로 전환. 이거 없으면 873211 라는 숫자가 아닌 "873211" 이라는 문자열로 인식
//   // parseInt() 말고도 + 나 * 같은 연산자 붙여서 간단하게 숫자로 변환 시키는 방법도 있음
// }


// function solution(n) {
//     var answer = 0;
//     var array = n.toString().split("");
//     array.sort().reverse();
//     answer = parseInt(array.join(""));
//     return answer;
// }

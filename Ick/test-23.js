// 자연수 뒤집어 배열로 만들기

// 문제 설명
  // 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
  // n은 10,000,000,000이하인 자연수입니다.

// 입출력 예
  //     n	      return
  //   12345	  [5,4,3,2,1]

// solution.js
function solution(n) {
  let one = Array.from(String(n), Number);
  // Array.from()을 이용해서 n값에 숫자를 새로운 Array 로 만들어줍니다.
  answer = one.reverse();
  // 만들어진 Array를 .reverse() 로 거꾸러 뒤집어주면 끝!
  return answer;
}

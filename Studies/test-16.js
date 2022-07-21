// 문자열 내 p와 y의 개수

// 문제 설명
  // 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
  // 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
  // 문자열 s의 길이 : 50 이하의 자연수
  // 문자열 s는 알파벳으로만 이루어져 있습니다.

// 입출력 예
  //     s	    answer
  // "pPoooyY"	 true
  //   "Pyy"	   false

// 입출력 예 설명
  // 입출력 예 #1
    // 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

  // 입출력 예 #2
    // 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

// solution.js by ick
function solution(s){
  let lowerCase = s.toLowerCase();
  // 정확한 비교를 위해 우선 lowerCase라는 변수에 문자열에 있는 모든 문자를 소문자로 변경해주는 메소드 함수를 선언하고
  
  let checkP = lowerCase.split('p').length;
  let checkY = lowerCase.split('y').length;
  
  // 위 두줄은, 소문자로 변환된 문자열을 각각 p 와 y을 중심으로 split이라는 메소드로 나누기를 합니다.
  // 그러게 되면 각각 중복되는 문자의 길이가 결정이 됩니다.
  
  if (checkP == checkY) {
      return true
  } else {
      return false
  }
  
  // 두 변수에 값이 똑같을때는 true, 틀리면 false를 반환해줍니다.
}

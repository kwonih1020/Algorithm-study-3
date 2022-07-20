// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    
    var arr2 = arr.map(x => x % divisor);
    var arr3 = [];
    
    console.log(arr2);
    for(var i = 0; i < arr2.length; i++) {
        if(arr2[i] === 0) arr3.push(arr[i])
    }
    arr3.sort((a,b) => a-b); // 오름차순 sort 메서드

   // 숫자 오름차순
   // nums.sort((a, b) => {
   //     if(a > b) return 1;
   //     if(a === b) return 0;
   //     if(a < b) return -1;
   // });

    
    if(arr3.length === 0) arr3[0] = -1; // 배열에 나눠떨어지는 수가 하나도 없을 경우

    return arr3;
    
}
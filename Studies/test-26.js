// 제일 작은 수 제거하기
function solution(arr) {
    var answer = [];
    let minValue = Math.min.apply(null, arr)


    for(let i = 0; i < arr.length; i++) {
        if(arr.length === 1) arr.splice(0,1,-1)
        if(arr[i] === minValue) arr.splice(i,1)
    }

    answer = arr

    console.log(answer)

    return answer;
}

let arr = [4,3,1,2]
solution(arr)
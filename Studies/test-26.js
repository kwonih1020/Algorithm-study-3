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


// solution.js by ick
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    return arr.length ? arr : [-1];
    // …arr 로 전개 하여 그중에 최소값을 구하여 그게
    // arr에 몇번째 인덱스에있는지 찾아낸다음
    // 그 인덱스로부터 1개를 제거 한거구요
    // arr.length 가 없으면 -1을 , 있으면 arr를 반환 하게 되어잇네요
}

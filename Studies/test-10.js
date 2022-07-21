function solution(arr1, arr2) {
    // return arr1.map((v,i) => arr2[i].map((e,j) => arr1[i][j]+arr2[i][j]))


    // map() 배열안의 요소에 하나씩 접근

    let arr3 = arr1.map(function(v, i) {
        // 1번
        // i = 0    인덱스 번호
        // v = [1,2]   배열안의 요소의 값
        
        // 3번
        // i = 1    인덱스 번호
        // v = [2,3]  배열안의 요소의 값

        // 5번
        // 더 이상 배열안의 요소가 없으므로 arr3에 값 저장
        return arr2[i].map(function(e, j) {
            // 2번
            // i = 0, j = 0
            // e = [3,4] 에서 [3] 을 가르킴
            // arr2[0][0], arr2[0][1] 2번 돈다
            // arr1[0][0] + arr2[0][0]
            // arr2[0][1] + arr2[0][1]
            // 2번 돌았으므로 빠져 나옴

            // 4번
            // i = 1, j = 0
            // e = [5,6] 에서 [5] 을 가르킴
            // arr2[1][0], arr2[1][1] 2번 돈다
            // arr1[1][0] + arr2[1][0]
            // arr2[1][1] + arr2[1][1]
            // 2번 돌았으므로 빠져 나옴
            return arr1[i][j] + arr2[i][j]
        })
    });


    // arr1과 arr2[i]에 map함수에 사용한 것은 2X2 행렬의 구조를 만들어 주기 위함
    // return arr1[i][j] + arr2[i][j] 값이 만들어준 구조에 저장되어 arr3가 되어 반환된다.

    return arr3;
}
var arr1 = [[1,2]
            [2,3]]
var arr2 = [[3,4] 
            [5,6]]
solution(arr1, arr2)

function solution(arr1, arr2) {
    var answer = [[]];

    for(var i = 0; i < arr1.length; i++) {
        answer[i] = [];
        for(var j = 0; j < arr2[0].length; j++) {
            answer[i][j] = arr1[i][j] + arr2[i][j]
        }
    }

    return answer;
}

// solution.js by ick
function solution(arr1, arr2) {
    // return arr1.map((e, i) => arr2[i].map((v, j) => arr1[i][j] + arr2[i][j]));
    
    let arr3 = arr1.map(function(v, i) {
        return arr2[i].map(function(e, j) {
            return arr1[i][j] + arr2[i][j]
        })
    });
    
    return arr3;
}

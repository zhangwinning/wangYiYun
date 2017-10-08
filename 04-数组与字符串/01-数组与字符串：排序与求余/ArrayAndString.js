function arrayAndString() {

}

arrayAndString.prototype = (function () {

    //私有方法定义    快速排序方法的实现
    function reArrangeByPivot(A, begin, end, pivot, checkEqual) {
        while (begin < end) {
            if (checkEqual ? A[begin] <= pivot : A[begin] < pivot) {
                begin++;
            } else {
                let temp;
                // A[begin] 和 A[end] 交换, 并且 end--;
                temp = A[begin];
                A[begin] = A[end];
                A[end] = temp;
                end--;
            }
        }
        return A;
    }

    //返回一个原型对象, java的私有方法不能访问
    return {
        constructor: arrayAndString, //把原型的`constructor`设置为正确的构造函数
        //共有方法:
        reArrangeArray: function (A, i) {
            let pivot = A[i];
            A = reArrangeByPivot(A, 0, A.length - 1, pivot, true);

            console.log('this is first sort:', A);
            let end = 0;
            for (let i = A.length - 1; i >= 0; i--) {
                if (A[i] <= pivot) {
                    end = i;
                    break;
                }
            }
            A = reArrangeByPivot(A, 0, end, pivot, false);

            console.log('this is second sort:', A);
        }
    }
})();

let sort = new arrayAndString();
sort.reArrangeArray([4, 5, 3, 1, 3], 2)
module.exports = function getZerosCount(number) {
    let num = number;
    let sumZero = 0;
    let memoize = 0;

    do{
        memoize = Math.floor(num / 5);
        num = memoize;
        sumZero = memoize + sumZero;
    }
    while(memoize > 0)

    return sumZero;
}

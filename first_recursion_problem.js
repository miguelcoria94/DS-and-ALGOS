function countDown(num) {
    if (num === 0) {
        console.log(num)
    } else {
        console.log(num)
        countDown(num - 1)
    }
}

countDown(5)
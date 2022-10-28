console.log(`hello world`)

// function sum1(a, b) {
//     return a + b;
// }
// arrows function giống function nhưng ngắn hơn(không cần let)

let sum = (a, b, callback) => {
    let sum = a + b;
    // setTimeout(() => {
    //     callback(sum);
    // }, 5000);
    let i = 0;
    let timer = setInterval(() => {
        callback(sum);
        i++;
        if (i === 5) {
            clearInterval(timer);
        }
    }, 1000);
    console.log(i);

}

let printSum = (message) => {
    console.log('>> check sum:a+b=', message)
}
sum(6, 9, printSum)
// console.log(`sum a+b= `, sum(7, 8))
// callback là thực hiện sau khi sự kiện chính thực hiện
// setTimeout set time delay
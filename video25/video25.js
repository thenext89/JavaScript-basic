// console.log(`hello world11`);
// function myFunction(param){
//     if(typeof param =='function'){
//         param(123);
//     }else{
//         console.log(param)
//     }

// }
// function myCallback(value){
//     console.log(`value: `,value)
// }
// myFunction('abc');
Array.prototype.map2 = function (callback) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        let result = callback(this[i], i);
        output.push(result);
    }
    return output;
}
let courses = [
    {
        name: 'js',
        coin: 100,
        isFinish: true,
    },
    {
        name: 'php',
        coin: 100,
        isFinish: true,
    },
    {
        name: 'ruby',
        coin: 100,
        isFinish: false,
    },
];
let htmls = courses.map2((courses) => {
    return `<h2>${courses}</h2>`;
});
// console.log(htmls.join(''));
// let htmls = courses.map((courses)=>{
//     return `<h2>${courses}</h2>`
// });
// console.log(htmls.join(''));
Array.prototype.every2 = function (callback) {
    let output = true;
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            let result = callback(this[index]);
            if (!result) {
                output = false;
                break;
            }
        }
    }
    return output;
}
let result = courses.every2((courses, index, array) => {
    return courses.isFinish;
});
// console.log(result);


// Đệ quy
function loop(start, end, callback){
    if(start<end){
        callback(start);
        return loop(start+1,end,callback);
    }
}


let arr = ['php', 'js', 'ruby'];
loop(0, arr.length, function (index) {
    console.log(arr[index]);
}); 

// tính giai thừa bằng đệ quy
function giaithua(num){
    let output = 1;
    if(num>0){
        output = num *giaithua(num-1)
        return output;
    }
    return 1;
}
console.log(giaithua(6))
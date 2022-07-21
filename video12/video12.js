console.log('hello world from html'.toUpperCase())
let arr = ['mancty', 'liver', 'chelsea']

// ôn lại bài cũ
// for (let i = 0; i < arr.length; i++) {
//     console.log('top:  ', i + 1, arr[i]);
// }


// while 
let i = 0;
// while (i < arr.length) {
//     console.log('top:  ', i + 1, arr[i]);
//     i++;
// }
do{
    console.log('top:  ', i + 1, arr[i]);
    i++;
}while(i<arr.length)
console.log(`hello world`)
let arr = [1,2,3,4,5,6,7,8,9,10]
for(let i = 0; i<arr.length;i++){
    console.log('check value i: ',arr[i]);
}
let arrMap = arr.map((item,index)=>{
    item *= item;
    return item;
})
console.log('arrMap: ',arrMap);
// map array lặp qua tất cả phần tử
// map() tạo ra một mảng mới để thực hiện công việc để mảng ban đầu không bị thay đổi

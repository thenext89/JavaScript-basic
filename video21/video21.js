console.log(`hello world`)

// fliter and find 
// filter tra ve nhieu phan tu 
// find trả về một phân tử đầu tiên nhìn thấy
// let arr=[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = [
    { name: 'tiep', age: 18 },
    { name: 'minh', age: 18 },
    { name: 'dong', age: 20 },
    { name: 'abc', age: 10 },
    { name: '123', age: 20 }
]
// filter
let filter = arr.filter((item, index) => {
    console.log("index = ", index);
    return item && item.age === 20;
});
let find = arr.find((item,index)=>{
    return item && item.age<18;
})
console.log(filter);
console.log(find);


let a=10;
let b=12;
console.log(`tong cua a+b=${a+b}`)// template strings/ template literals
console.log(`gia tri cua a la: ${a}
gia tri cua b = ${b}`)


// let vs var, let bắt lỗi chặt hơn var, VD
function run(){
    var tiep='tiep';
    let duc =`duc`;
    console.log(tiep,duc)
    {
        var tiep1=`tiep 1`;
        let duc1 = 1;
        console.log(tiep1);
        console.log(duc1);
    }
    console.log(tiep1);// tiep1 chưa khai báo nhưng vẫn có giá trị
    console.log(duc1);
}
run();
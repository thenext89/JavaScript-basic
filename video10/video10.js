console.log(`hello world from HTML`)
let a = 5;
let b = "5";

console.log(`compare a==b: `,'a = ',a,'b = ',b,'result: ', a==b)
console.log(`compare a===b: `,'a = ',a,'b = ',b,'result: ', a===b)
// khi dùng === so sánh nó sẽ so sanh cả type và value
// khi dùng == so sánh nó sẽ cố gắng convert về cùng type rồi so sánh
 

// phân biệt empty, null, undefined
// null do kiểu dữ liệu bên dưới cơ sở dữ liệu
let r = null;// chưa lưu địa chỉ và bộ nhớ
// empty
let c='';
// undefined do chưa gán giá trị cho biến or không khai báo mà vẫn sử dụng
let e;
console.log(`check value: `,e)
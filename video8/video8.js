console.log(`hello world from html`)
// cách khai báo object key:value
let obj = {
    name: 'tiep',
    address: 'hanoi',
    email:'',
    gender:'',
    a:function(){
        console.log('hello world inside function')
    }
};
let b = 'name'
obj[b]='change'
console.log(`what is your name?
my name is:`, obj.name)
console.log(`where are you from?
Im from: `, obj.address)
console.log(`a: `, typeof a, `b: `, typeof b)
obj.a()
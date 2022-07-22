console.log('hello world from html'.toUpperCase())


let arr = ['liver', 'chelsea', 'mu', 'mancty']

let i = 0;
while (i < arr.length) {
    // if (arr[i].length === 2) {
    //     console.log('top ', i + 1, ':', arr[i]);
    // }else if(arr[i].length===5){
    //     console.log('top ', i + 1, ':', arr[i]);
    // }else{

    // }
    if(arr[i]==='chelsea'){
        console.log('top ',i+1,':',arr[i]);
        break;
    }
    //continue thi se bo qua cac buoc con lai va bat dau vong lap
    i++;
}
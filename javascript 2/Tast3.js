//Tast# 03


let arr = [1,2,3,4,5];
function arrofnum(num)
{
    let newarr = [];
    for(let i =0; i<num.length; i++ )
    {
        newarr[i] = 2*num[i];
    }
    return newarr;    
}
console.log(arrofnum(arr));
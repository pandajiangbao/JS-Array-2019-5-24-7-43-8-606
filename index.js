// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log("a is array: " + Array.isArray(a));
console.log("b is array: " + Array.isArray(b));

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
a = a.map(function(item,index,array){
    return (item*2);
});


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(" "));
console.log(colors.join("+"));
console.log(colors.join(","));

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function compare(var1, var2){
    if(var1 > var2){
        return -1;
    }
    if(var1 < var2){
        return 1;
    }
    return 0;
}
a.sort(compare);

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var map = new Map();
var maxEle;
var maxEleTimes=0;
for(let i=0;i<a.length-1;i++){
    var sum;
    if(map.has(a[i])){
        sum = map.get(a[i])+1
        map.set(a[i],sum);
    }else{
        sum=1;
        map.set(a[i],sum);
    }
    
    if(maxEleTimes<sum){
        maxEleTimes=sum;
        maxEle=a[i];
    }
}
console.log("出现频率最高的元素是："+maxEle+", 出现次数："+maxEleTimes)

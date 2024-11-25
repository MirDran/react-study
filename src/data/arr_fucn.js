
//기본 배열
let arr = [10, 20, 30, 40];

//JavaScarip 유용
//map

arr.map(()=>{ // 반복 실행 하면서 return 가능
    console.log('arr map');
});


arr.forEach(()=>{ //반복문 내부에 코드 실핼 하고 끝
    console.log('arr forEach;');
})

arr.map((item, index)=>{ // map 내부 함수 매개변수 (item) 배열안에 값 주입
   //// map 내부 함수 매개변수 (item, index) 배열안에 값과 인덱스 주입 
    console.log('값:'+item+' index:'+index+' 배열[index]:'+arr[index]);
})


let resurt1 = arr.map(()=>{ // [99,99,99,99]
    return 99;
})
console.log(resurt1);

let resurt2 = arr.map((item)=>{//[undefined,undefined,undefined,undefined]
    console.log(item);
})
console.log(resurt2);


let resurt3 = arr.map((item)=>{
    return item + 100;
})
console.log(resurt3);

let resurt4 = arr.map((item)=>{
    return '보유한 값:' + item;
})
console.log(resurt4);

let menuArr = ['우동','라면','김밥'];
let resurt5 = menuArr.map((item, index)=>{
    return '<p>'+item+'</p>';
})
console.log(resurt5);


//()=>{return data}  ()=>data 면 {}를 지우면 값을 리턴한다.
let resurt6 = menuArr.map((item, index)=>'<p>'+item+'</p>');
console.log(resurt6);



//2) filter

let result7 = arr.filter((value)=>{
    return value != 20; // 필러인(제외)할 조건
    //20 아닌 애들을 리턴 한다 라고 생각
    //조건 결과가 참 인 것들만 returm
});
console.log(result7);

//3) find

let result8 = arr.find((value)=>{
    return value == 30;
}); // 없는 값의 경우 undefined
console.log(result8);

//4) findIndex
let result9 = arr.findIndex((value, index)=> {
    return value == 20;
}); //찾는 값이 없으면 -1;
console.log(result9);

let [n1, n2, n3] = [10, 20, 30];
console.log(n1);
console.log(n2);
console.log(n3);

let obj = {num1 : 30, num2: 50};
console.log(obj.num2);

let {num1,num2} = obj;
console.log(num1);
console.log(num2);
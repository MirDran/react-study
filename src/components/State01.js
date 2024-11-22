import { useState } from "react";

function State01(){

    //React Hooks
    //useState -> 상태를 저장하는 변수
    // State 변수 값이 변경 된 경우 -> 재 렌더링
    //set함수를 통해서 변경 된 경우 (재렌더링 조건)


    let cnt = 0;

    //cosnt| let [변수명, set함수명] = useState(초기값);
    let [count, setCount] = useState(0);

    return(
        <div className="App">
            <h1>State01</h1>
            <p>{cnt}</p>
            <button onClick={()=>{
                cnt++;
                console.log('클릭');
                console.log(cnt);
            }}>cnt증가</button>

            <p>{count}</p>
            <button onClick={()=>{
                //count++; set함수 사용이 아닌 경우, 
                //값은 증가O 재렌더링X
                // setCount(count = count + 1 );
                setCount( count + 1) ;
                console.log('count 증가 클릭');
                console.log(count);
            }}>count증가(state)</button>
        </div>
    )
}

export default State01;
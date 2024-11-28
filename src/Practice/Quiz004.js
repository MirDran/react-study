import ColorBox from "./ColorBox";
import { useState } from "react";

function Quiz004() {

    let [boxes, setBoxes] = useState(['red','blue','green','black']);



    return (
        <div><p>
            <button onClick={() => {
                let temp = [...boxes];
                temp.unshift('red');
                setBoxes(temp);
            }}>앞빨간박스추가</button>

            <button onClick={() => {
                let temp = [...boxes];
                temp.unshift('blue');
                setBoxes(temp);
            }}>앞파란박스추가</button>

            <button onClick={() => {
                let temp = [...boxes];
                temp.unshift('green');
                setBoxes(temp);
            }}>앞초록박스추가</button>

            <button onClick={() => {
                let temp = [...boxes];
                temp.unshift('black');
                setBoxes(temp);
            }}>앞검정박스추가</button>

            <button onClick={() => {
                let temp = [...boxes];
                temp.push('red');
                setBoxes(temp);
            }}>뒤빨간박스추가</button>

            <button onClick={() => {
                let temp = [...boxes];
                temp.push('blue');
                setBoxes(temp);
            }}>뒤파란박스추가</button>

            <button onClick={() => {
                let temp = [...boxes];
                temp.push('green');
                setBoxes(temp);
            }}>뒤초록박스추가</button>

            <button onClick={() => {
                let temp = [...boxes];
                temp.push('black');
                setBoxes(temp);
            }}>뒤검정박스추가</button>

            <button onClick={() => {
                let temp = [...boxes];
                temp.shift();
                setBoxes(temp);
            }}>앞 박스 삭제</button>

            <button onClick={() => {
                let temp = [...boxes];
                temp.pop();
                setBoxes(temp);
            }}>뒷 박스 삭제</button>

            <button onClick={() => {
                let temp = [...boxes];
                temp.splice(0);
                setBoxes(temp);
            }}>전체 박스 삭제</button>

        </p>


            {
                boxes.map((value, index)=>{
                    return <ColorBox bgColor={value} boxes = {boxes} setBoxes={setBoxes} index={index}/>
                })
            }

        </div>
    );
}

export default Quiz004;
import ColorBox from "./ColorBox";
import { useState } from "react";

function Practice002() {

    let [boxes, setBoxes] = useState([]);


    return (
        <div><p>
            <button onClick={() => {
                let temp = [...boxes];
                temp.unshift(<ColorBox bgColor={'red'} />);
                setBoxes(temp);
            }}>앞빨간박스추가</button>

            <button onClick={() => {
                let temp = [...boxes];
                temp.unshift(<ColorBox bgColor={'blue'} />);
                setBoxes(temp);
            }}>앞파란박스추가</button>

            <button onClick={() => {
                let temp = [...boxes];
                temp.unshift(<ColorBox bgColor={'green'} />);
                setBoxes(temp);
            }}>앞초록박스추가</button>

            <button onClick={() => {
                let temp = [...boxes];
                temp.unshift(<ColorBox bgColor={'black'} />);
                setBoxes(temp);
            }}>앞검정박스추가</button>

            <button onClick={() => {
                let temp = [...boxes];
                temp.push(<ColorBox bgColor={'red'} />);
                setBoxes(temp);
            }}>뒤빨간박스추가</button>

            <button onClick={() => {
                let temp = [...boxes];
                temp.push(<ColorBox bgColor={'blue'} />);
                setBoxes(temp);
            }}>뒤파란박스추가</button>

            <button onClick={() => {
                let temp = [...boxes];
                temp.push(<ColorBox bgColor={'green'} />);
                setBoxes(temp);
            }}>뒤초록박스추가</button>

            <button onClick={() => {
                let temp = [...boxes];
                temp.push(<ColorBox bgColor={'black'} />);
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
                boxes
            }

        </div>
    );
}

export default Practice002;
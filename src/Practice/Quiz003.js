import './Quiz003.css';
import { useState } from 'react';
import Box from './Box';


function Quiz003(){

    let [boxes,setBoxes] =useState([]); //1. 이 배열안에 [] 만큼 box를 추가
                                        // 배열이름 boxes 초기값 []  boxes = [];


    let [arr,setArr] = useState([1,1,1,1,1,1,1,1]);
    
    // for(let i=0; i<5; i++){
        // boxes.push(<Box/>); //
    // }

    return(
        <div>
            <p style={{ margin: '10px'}}>
            <button onClick={()=>{
                // let temp = [...arr];
                // temp.push(0); //값은 상관 없음 push unpush 상관 없음 늘어나는 거에 따라 박스 증가

                let temp = [0, ...arr]; // 베열을 분해하고 추가하는 것이므로 += 같은 느낌으로 추가하는 것에 따라 
                //증가량이 달라짐 push(0) [...arr, 0] unpush(0) [.0,...arr] 로 줄여쓰는 것임
                setArr(temp);
            }}>추가</button></p> 
            {
                arr.map(()=>{
                    return <Box/>
                })
            }
            
        </div>
    )

    // return(
    //     <div>
    //         <p style={{ margin: '10px'}}>
    //         <button onClick={()=>{
    //             let temp = [...boxes];  // 박시스를 템프에 추가하고
    //             temp.push (<Box/>);     // 박스배열에 박스를 추가하고
    //             setBoxes(temp);         // 추가된 박스를 재렌더링 한다. 그리고 밑에서 
    //             // boxes.push(<Box/>);
    //         //박스가 몇개가 그려진다 라는 식으로
    //         }}>추가</button></p> 
    //         {
    //             boxes                   // 박스를 그린다.
    //         }
            
    //     </div>
    // )
}

export default Quiz003;
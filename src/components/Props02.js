//Props02
import Box from './Box';
import { useState } from 'react';


function Props02() {

    // point -> 배열이 state 변수 처리 -> 재렌더링이
    //일어나도 데이터가 유지
    let [textArr, setTextArr] = useState(['아침', '점심', '저녁','야식']);
    let [detailArr, setDetailArr] = useState(['배고프다', '졸리다', '피곤하다','행복하다']);
    // let [num, setNum] = useState(0);

    return (
        <div>
            {
                textArr.map((item, index) => {
                    // return <Box text={item} detail={detailArr[index]}/>
                    return <Box text={textArr[index]} detail={detailArr[index]} />
                })
            }
            {/* <Box text={arr[0]} detail={detail[0]} />
            <Box text={arr[1]} detail={detail[1]}/>
            // <Box text={arr[2]} detail={detail[2]}/> */}
            <button onClick={() => {
                
                let tmpe = [...textArr]; 
                textArr.push('두번째 야식');
                detailArr.push('살찐다');
                console.log(textArr);
                console.log(detailArr);

                //재렌더링을 위해 state 변수 변경
                setTextArr(textArr);    //참조타입 변수 (배열)
                setDetailArr(detailArr);
                // textArr.map ( (item, index) => {
                //     return <Box text={item} detail={detailArr[index]} />
                // })
                //이 버튼을 누르면
                //화면에 내용이 추가 표시
                //두번째 야식
                //살찐다
                // setNum(num + 1); //기본타입 변수 
            }}>
                추가버튼</button>

        </div>
    )
}

export default Props02;
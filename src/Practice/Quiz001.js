import logo from './logo.svg';
import './Quiz001.css';
import { useState } from "react";

function Quiz001() {

  let [even, setEven] = useState(0);

  return (

    // <div className='App'>
    //   <button onClick={() => {
    //     setEven(even + 2);
    //     console.log(even);
    //   }}>짝수출력</button><span style={ {color : 'red'} }>{even}</span>
    // </div>

    <div >
      <button onClick={() => {
        console.log('버튼눌림');
        setEven(even+2);
        console.log(even);
      }}>짝수출력</button>
      <p className='font-red' style={ {color : 'red'} }>{even}</p>
    </div>
  );
};

export default Quiz001;

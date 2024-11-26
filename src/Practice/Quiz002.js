import './Quiz002.css';
import { useState } from 'react';
import TextItem from './textItem';

function Quiz002() {

  
  
  let title = ['하나','둘','셋','넷','다섯'];
  let content = ['내용하나','내용둘','내용셋','내용넷','내용다섯'];


  return (

    <div className="App">
      {
        title.map( (item, index)=>{
          // return <TextItem title={ item } />
          return <TextItem title={title[index]} content={content[index]} />
        })
      }



{/* 
      <TextItem />
      <TextItem />
      <TextItem />
      <TextItem />
      <TextItem /> */}

    </div>



    //내가 한 실패
    // <div>
    //     <button onClick={()=>{

    //       <><h1>제목 : {tiArr[index]}</h1>
    //       <p>내용 : 내용 {tiArr[index]}</p></>

    //       if(index == 0)
    //         tiArr.push('둘');
    //       else if (index == 1)
    //         tiArr.push('셋');
    //       else if (index == 2)
    //         tiArr.push('넷');
    //       else if (index == 3)
    //         tiArr.push('다섯');
    //       else if(index > 4)
    //         index = 0;


    //       setTitle( (index+1) );
    //     }}> 
    //     변경 버튼</button>


    //     <h1>제목 : {tiArr[index]}</h1>
    //     <p>내용 : 내용 {tiArr[index]}</p>
    // </div>

  );
}

export default Quiz002;

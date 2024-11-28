import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';

function NewsBlog() {



    //Javascript 코드

    let title = 'React Study';
    let [news1, setNews1] = useState('Today News');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');
    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);

    let [cnt, setCnt] = useState([0, 0, 0]);
    let index = 0;

    let [modalFlag, setModalFlag] = useState(false);
    let [chn, setChn] = useState(['Today News', 'Yesterday News', 'Tomorrow News']);

    let [selectiedTitle, setSelectiedTitle] = useState(' ');
    let [selCnt, setSelCnt] = useState(0);
    let [inputText,setInputText] = useState('');

    return (
        <>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <div style={{ color: 'orange', fontSize: "20px" }}>{title}</div>
            </div>

            {
                news.map((item, index) => { //item 오늘의뉴스 , index 0
                    //반복 됨
                    // item , index
                    // 오늘의 뉴스 , 0
                    // 어제의 뉴스 , 1
                    // 내일의 뉴스 , 2

                    return (
                        <div className="post-list">
                            <h4>
                                <span onClick={() => { //제목 클릭
                                    setSelectiedTitle(item);
                                    //어떤 뉴스를 눌렀나
                                    setModalFlag(!modalFlag); //모달창 on/off전환
                                    setSelCnt(cnt[index]);// 모달창이 ON이 되고 보이는 상태에서 바뀌어야 해서 
                                }}>{news[index]}
                                </span>
                                <span onClick={() => {
                                    let temp = [...cnt];
                                    temp[index]++;
                                    setCnt(temp);
                                }}> ♥ </span>
                                {cnt[index]} </h4>
                            <p>내용 무</p>
                            <button onClick={()=>{
                                let temp = [...news];
                                let temp2 = [...cnt];
                                temp.splice([index],1);
                                temp2.splice([index],1);
                                setNews(temp);
                                setCnt(temp2);
                            }}>삭제</button>
                        </div>
                    )
                })
            }
            <button onClick={() => {

                // setNews(['Today News','어제의 뉴스','내일의 뉴스']); 주소가 바뀌면 재렌더링
                //arry 새로운 배열 deep copy

                let temp = [...news]; //deep copy
                temp[0] = 'Today News'; // 0인덱스 값 변경
                setNews(temp);  //news = temp;

                // temp.shift(); // ['어제의 뉴스','내일의 뉴스'];
                // temp.unshift('Today News'); // ['Today News','어제의 뉴스','내일의 뉴스'];

                // temp.splice(0, 1, 'Today News'); // 0번째 배열에서 첫번 째 단어 삭제 후 'Today News' 추가

            }}>제목 변경</button>

            <div>
                <input type='text' id='input_news' value={inputText} onChange={(event)=>{// 입력을 받고 있을 때 뭐 할꺼냐
                    // console.log(event);
                    // console.log(event.target.value);
                    setInputText(event.target.value);
                }}></input>
                
                <button onClick={()=>{
                    

                    //전제조건 : 양측에 있는 띄어쓰기는 제외 (trim 제외)
                    inputText = inputText.trim();

                    if(inputText == ''){ 
                         // 밑의 inputText는 들어가 있기 때문에 inputText= inputText.trim()으로 부르기

                        alert('값을 입력하세요');
                        setInputText('');
                    }
                    else{
                        let temp = [...news];
                        temp.push(inputText);
                        setNews(temp);

                        cnt.push(0);
                        setInputText('');
                    }
                    //입력된 값 확인
                    // //news 배열에 추가 저장 //javaScript 방식
                    // let title = document.getElementById('input_news').value;
                    // console.log(title);

                    // let temp = [...news];
                    // temp.push(title);
                    // setNews(temp);

                    // document.getElementById('input_news').value = '';

                }}>발행</button>
            </div>

            {
                modalFlag == true ? <Modal title={selectiedTitle} news={news} 
                setNews={setNews} cnt={selCnt} 
                bgColor={'lightgreen'} /> : null
            }



            {/* <div className="post-list">
                <h4>
                    <span onClick={() => {

                        setModalFlag(!modalFlag);

                        // setModalFlag( modalFlag ? false : true);

                        // if(modalFlag == true){
                        //     setModalFlag(false);
                        // }else {
                        //     setModalFlag(true);
                        // }

                    }}>{news[0]}</span> <span onClick={() => {
                        setCnt1(cnt1 + 1);
                    }}> ♥ </span> {cnt1} </h4>
                <p>내용 무</p>


            </div>

            <div className="post-list">
                <h4>
                    <span>{news[1]}</span>
                    <span onClick={() => {
                        setCnt2(cnt2 + 1);
                    }}> ♥ </span> {cnt2} </h4>
                <p>내용 무</p>

            </div>

            <div className="post-list">
                <h4>
                    <span>{news[2]}</span>
                    <span onClick={() => {
                        setCnt3(cnt3 + 1);
                    }}> ♥ </span> {cnt3} </h4>
                <p>내용 무</p>

            </div> */}

            {/* <div className="post-list">
            <h4>오늘의 뉴스</h4>
            <p>내용 무</p>
            </div>

            <div className="post-list">
            <h4>어제의 뉴스</h4>
            <p>내용 무</p>
            </div>

            <div className="post-list">
            <h4>내일의 뉴스</h4>
            <p>내용 무</p>
            </div> */}


        </>
    );
}

export default NewsBlog;
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

    let [cnt1, setCnt1] = useState([0, 0, 0]);
    let index = 0;

    let [modalFlag, setModalFlag] = useState(false);
    let [chn, setChn] = useState(['Today News', 'Yesterday News', 'Tomorrow News']);

    return (
        <>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <div style={{ color: 'orange', fontSize: "20px" }}>{title}</div>
            </div>

            {
                news.map((item, index) => {
                    return (
                        <div className="post-list">
                            <h4>
                                <span onClick={() => {
                                    setModalFlag(!modalFlag);
                                }}>{news[index]}
                                </span>
                                <span onClick={() => {
                                    let temp = [...cnt1];
                                    temp[index]++;
                                    setCnt1(temp);
                                }}> ♥ </span>
                                {cnt1[index]} </h4>
                            <p>내용 무</p>
                        </div>
                    )
                })
            }
            <button onClick={() => {

                // setNews(['Today News','어제의 뉴스','내일의 뉴스']); 주소가 바뀌면 재렌더링
                //arry 새로운 배열 deep copy

                let temp = [...news]; //deep copy
                temp[0] = 'Today News'; // 0인덱스 값 변경
                temp[1] = 'Yesterday News'
                temp[2] = 'Tomorrow News'
                setNews(temp);  //news = temp;

                // temp.shift(); // ['어제의 뉴스','내일의 뉴스'];
                // temp.unshift('Today News'); // ['Today News','어제의 뉴스','내일의 뉴스'];

                // temp.splice(0, 1, 'Today News'); // 0번째 배열에서 첫번 째 단어 삭제 후 'Today News' 추가

            }}>제목 변경</button>

            {
                modalFlag == true ? <Modal news={news} setNews={setNews} bgColor={'lightgreen'}/> : null
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
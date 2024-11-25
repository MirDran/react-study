// h1 아침 부분을 동적으로 바꾸기

function Box( {text, detail} ) { //매개변수 prors 라는게 있다

    //props = {text:}; 형태로 들어온다
    //props = {text = '아침'};
    //props = {text = '점심'};
    //props = {text = '저녁'};

    return (
        <div style={{ backgroundColor: 'gray' }}>
            <h1>{text}</h1> 
            <p>{detail}</p>
        </div>
    );
}

export default Box;

function modal(props) {

    return (

        <div className="modal" style={{ backgroundColor: props.bgColor }}>
            <h3><span>{props.title}</span>
                <span> ♥ </span> 
                {props.cnt} </h3>
            <p>날짜</p>
            <p>상세내용</p>


            {/* <button onClick={()=>{
            let temp = [...props.news]; 
            temp[0] = '긴급 뉴스';
            props.setNews(temp);  
            }}>제목 수정</button> */}
        </div>


    )
}

export default modal;
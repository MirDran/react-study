
function State02(){


    let text = "";
let textArr =[]; // 배열
    for(let i = 0; i<5; i++){
        text += "<p>안녕하세여</p>";// 단순 <p> 태그 포함
        //text가 나옴
        textArr.push(<p>안녕하세요~</p>);
    }
    let numArr = [1,1,1,1,1,1,1,1,1];

    let msgArr = ['안녕','hi','hello','헤이'];

    return(
        <div>
            {textArr}
            <hr/>
            {
                numArr.map(()=>{
                    return(
                        <p>안녕하세요~</p>
                    )
                })
            }
            <hr/>
            {
                msgArr.map((item)=>{
                    return(
                        <p>{item}</p>
                    )
                })
            }
        </div>
    );
}

export default State02;
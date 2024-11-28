import './Quiz003.css';

function ColorBox(porps){

    return(
            <div className='box' style = { { backgroundColor: porps.bgColor } }>
                <button onClick={()=>{
                let temp = [...porps.boxes];
                temp.splice([porps.index],1);
                porps.setBoxes(temp);
            }}>X</button></div>
    );
}

export default ColorBox;
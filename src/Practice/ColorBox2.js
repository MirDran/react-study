import './Quiz003.css';

function ColorBox(porps){

    return(
            <div className='box' style = { { backgroundColor: porps.bgColor } }>
            </div>
    );
}

export default ColorBox;
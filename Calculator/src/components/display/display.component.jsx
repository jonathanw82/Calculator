import './display.styles.css'

const Display = ({value, result}) =>{
    return(
        <>
         <div className="display">
            <div className='input-numbers'>{value}</div>
            <div className='answers'>{result}</div>
         </div>
        </>
       
    )
}

export default Display;
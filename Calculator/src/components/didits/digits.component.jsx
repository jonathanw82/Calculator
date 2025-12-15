import './didgit.style.css'

const Didgit = ({number, handleClick}) =>{

    const isNumber = typeof number === 'number';
    const buttonClass = isNumber ? 'button-number-color' : 'button-operator-color';
    
    return(
        <button onClick={handleClick} className={`rounded-corners ${buttonClass}`} >{number}</button>
    )
}

export default Didgit;
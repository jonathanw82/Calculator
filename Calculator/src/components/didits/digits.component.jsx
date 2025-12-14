import './didgit.style.css'



const Didgit = (number, handleClick) =>{
    return(
        <button onClick={() => handleClick(number)} className='rounded-corners'>{number.number}</button>
    )
}

export default Didgit;
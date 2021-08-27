function Option(props) {
    return (
        <div className='border' id={props.name}>
            <div className="option">
                <img  src={props.img} alt={props.name}/>
            </div>  
        </div>
    )
}

export default Option;
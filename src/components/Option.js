function Option(props) {
    if (props.step === 'one') {
        return (
            <div className='border' id={props.name}>
                <div className="option" onClick={props.onClick} data-option={props.name} >
                    <img src={props.img} alt={props.name}/>
                </div>  
            </div>
        )
    }
    else {
        return (
            <div className='border' id={props.name}>
                <div className="option" data-option={props.name} >
                    <img src={props.img} alt={props.name}/>
                </div>  
            </div>
        )
    }
}

export default Option;
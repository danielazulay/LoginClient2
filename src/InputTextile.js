function InputTextile(props){
    return(
    <div>
    
        <label forName={props.label}>{props.label}</label>
        <input 
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={props.onChange}/>
    </div>
    )
    
    }
    
    export default InputTextile
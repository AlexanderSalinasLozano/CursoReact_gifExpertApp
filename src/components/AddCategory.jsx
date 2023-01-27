import {useState} from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('')
    const onInputChange=(event)=>{
        // console.log(event.target.value);
        setinputValue(event.target.value);
    };


    const onsubmit=(event)=>{
        event.preventDefault();
        const newInputValue=inputValue.trim();
        if (newInputValue.length <=1) return;
        onNewCategory(newInputValue);
        setinputValue('');
    };
  return (
    <form onSubmit={onsubmit}>
        <input 
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
    
  )
}

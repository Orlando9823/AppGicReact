import {useState} from 'react'

export const AgregarCategoria = ({setCategoria}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        setCategoria((categoria) => {
            if (categoria.includes(inputValue)) {
                alert('Ya esta agregada esta categoria');
                return [...categoria];

            } else {
                return [inputValue, ...categoria]
            }
        });
        setInputValue('');
    }


    return (
        <>
            <form onSubmit = {onSubmit}>
                <button onClick={onSubmit}>Buscar</button>
                <input 
                    type = "text" 
                    placeholder = "Burcar Gif"
                    value = {inputValue}
                    onChange = {onInputChange}
                />
            </form>
            
            
        </>
        

        
    )
}
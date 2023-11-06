
import {useState} from 'react'


export const Listado = () => {

    const [categoria, setCategoria] = useState([ '' ]);
    const addCategoria = () => {
    }

    return(
        <>
            <button onClick={addCategoria}>Agrear</button>
            {
                categoria.map(category => {
                    return <li key={category}>{category}</li>
                })
            }
        </>
    )
}
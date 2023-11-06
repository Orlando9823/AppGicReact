import { AgregarCategoria } from "./Componentes/AddCategoria"
import {useState} from 'react'
import { GifGrid } from "./Componentes/GifGrid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faDeleteLeft } from '@fortawesome/free-solid-svg-icons';


export const GifExpertApp = () => {

    const [categoria, setCategoria] = useState([ 'Gif' ]);

    const eliminarActual = () => {
        setCategoria((categoria) => {
            return [...categoria.slice(categoria.shift())]
        })
    }

    const eliminarTodo = () => {
        setCategoria(() => {
            return []
        })
    }

    return (
        <>  
            <nav>
                <h1><a href="">GifExpertApp</a></h1>
                <AgregarCategoria setCategoria = {setCategoria}/>
            </nav>
            <div className="delete">
                <button className="actual" onClick={eliminarActual}><FontAwesomeIcon className='iconDeleteActual' icon={faDeleteLeft} size="xl" style={{color: "#e62828",}} /></button>
                <hr />
                <button className="todo" onClick={eliminarTodo}><FontAwesomeIcon className='iconDeleteTodo' icon={faTrash} style={{color: "#ea3434",}} /></button>
            </div>
            <br /><br />
            <div className= "container">
                {
                    categoria.map( (category) => (
                        <GifGrid 
                            key = {category} 
                            category = {category}
                            setCategoria= {setCategoria}
                        />
                    ))
                }
            </div>
        </>
    )
}
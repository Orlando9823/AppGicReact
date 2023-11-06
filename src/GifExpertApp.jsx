import { AgregarCategoria } from "./Componentes/AddCategoria"
import {useState} from 'react'
import { GifGrid } from "./Componentes/GifGrid";


export const GifExpertApp = () => {

    const [categoria, setCategoria] = useState([ 'One punch' ]);

    return (
        <>  
            <nav>
                <h1>GifExpertApp</h1>
                <AgregarCategoria setCategoria = {setCategoria}/>
            </nav>
            <br /><br />
            <div className= "container">
                {
                    categoria.map( (category) => (
                        <GifGrid 
                            key = {category} 
                            category = {category}
                        />
                    ))
                }
            </div>
        </>
    )
}
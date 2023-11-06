import { useFetchGif } from '../Hooks/UseFetchGif';
import { GifItem } from "./GifItem";
import {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../Styles/GifGrid.css';

export const GifGrid = ({category}) => {
    
    const {image, loading, delet} = useFetchGif(category);
    const categoriasRef = useRef();


    const deletDiv = () => {
        const categorias = categoriasRef.current;

        if (delet == true) {
            categorias.style.display= 'block';
        } else {
            categorias.style.display= 'none';
        }
    }

    // const deletDiv = ({setCategoria}) => {
    //     setCategoria((categoria) => {
    //         const nuevoArray = categoria.filter(category => category !== category);
    //         setCategoria(nuevoArray);
    //         }
    //     );
    // }

    return (
        <>
            <div className="categorias" ref={categoriasRef}>
                <div className="categoriaDelet">
                    <h1 className= "categoria">{category}</h1>
                    <div onClick={() => deletDiv()}><FontAwesomeIcon className='iconDelete' icon={faTrash} size="lg" style={{color: "#df3030",}} /></div>
                </div>
                <br /><br />
                {
                    loading ? (
                        <div className="loading">
                            <div id="preloader_1">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        </div>
                    ): null
                }
                <div className ="containerCard">
                {
                    image.map((images) => {
                            return <GifItem 
                                key = {images.id}
                                {...images}
                            />
                    })
                }
                </div>
                <br /><br />
            </div>
        </>
    )
}

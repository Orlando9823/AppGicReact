import { useFetchGif } from '../Hooks/UseFetchGif';
import { GifItem } from "./GifItem";
import {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import '../Styles/GifGrid.css';

export const GifGrid = ({category, setCategoria}) => {
    
    const {image, loading} = useFetchGif(category);
    const categoriasRef = useRef();

    const deleteDiv = () => {

        setCategoria((categoria) => {

            const h1Element = document.getElementById(category);
            const valorH1 = h1Element.textContent;

            const posicionArray = categoria.indexOf(valorH1)

            console.log(posicionArray);

            if (categoria.length == 1) {
                return []
            }
            const myArray = [...categoria];
            myArray.splice(posicionArray, 1);
            return myArray
        })
    }
    return (
        <>
            <div className="categorias" ref={categoriasRef}>
                <div className="categoriaDelet">
                    <h1 className= "categoria" id={category}>{category}</h1>
                    <div onClick={deleteDiv}><FontAwesomeIcon className='iconDelete' icon={faCircleXmark} style={{color: "#e82121",}} /></div>
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

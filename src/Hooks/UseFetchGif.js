import {useState, useEffect} from 'react'
import { getGifs } from '../Helpers/GetGift';

export const useFetchGif = (category) => {

    const [loading, setLoading] = useState(true)
    const [image, setImage] = useState([]);
    const [delet, setDelet] = useState(true)

    const getImagenes = async() => {
        const newImagenes = await getGifs(category);
        setImage(newImagenes);
        setLoading(false);
        setDelet(false)
    }

    useEffect(() => {
        getImagenes();
    }, []);

    return {
        image: image,
        loading: loading,
        delet: delet
    }

}


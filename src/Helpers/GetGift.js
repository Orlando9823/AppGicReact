export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=JNDevFcNZbBHtc3ECwg4qVr6gRbStOS5&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.original.url
    }));

    console.log(gifs);
    return gifs;
}
export const GifItem = ({title, url}) => {

    return (
        <div className="card">
            <h3>{title}</h3><br />
            <img src= {url} alt= {title} />
        </div>
    )
}

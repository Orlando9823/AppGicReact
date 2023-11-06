import PropTypes from 'prop-types'

export const GifItem = ({title, url}) => {

    return (
        <div className="card">
            <h3>{title}</h3><br />
            <img src= {url} alt= {title} />
        </div>
    )
}

// GifItem.propTypes= { 
//     title: PropTypes.string.isRequerid,
//     url: PropTypes.string.isRequerid
// }

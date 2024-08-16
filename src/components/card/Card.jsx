import './card.css'
import star from '../../../assets/images/star.jpg'

export const Card = ({props})=> {

    return (
        <>
            <div className="card-container">
                <img className='image-card' src={props.image} alt="image-card" />
                <div className="flex-block">
                    <img className='star' src={star} alt="star" />
                    <p><strong>{props.rate}</strong><span className='soft-text'>({props.quantity})·{props.country}</span></p>
                </div>
                <div className="description">
                    <p>{props.description}</p>
                    <p><strong>From ${props.price}</strong> / person</p>
                </div>
            </div>
        </>
    )
}
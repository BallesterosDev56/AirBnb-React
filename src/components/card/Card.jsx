import './card.css'
import star from '../../../assets/images/star.jpg'

export const Card = ({props})=> {

    const {online,image, rate, description, price, quantity, country} = props;

    return (
        <>
            <div className="card-container">
                { online? <div className="card-badge">ONLINE</div> : <div className="card-badge">SOLD OUT</div> }
                <img className='image-card' src={image} alt="image-card" />
                <div className="flex-block">
                    <img className='star' src={star} alt="star" />
                    <p><strong>{rate}</strong><span className='soft-text'>({quantity})·{country}</span></p>
                </div>
                <div className="description">
                    <p>{description}</p>
                    <p><strong>From ${price}</strong> / person</p>
                </div>
            </div>
        </>
    )
}
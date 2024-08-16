import './card.css'
import star from '../../../assets/images/star.jpg'

export const Card = ({image})=> {
    return (
        <>
            <div className="card-container">
                <img className='image-card' src={image} alt="image-card" />
                <div className="flex-block">
                    <img className='star' src={star} alt="star" />
                    <p><strong>5.0</strong><span className='soft-text'>(6)·USA</span></p>
                </div>
                <div className="description">
                    <p>Life lessons with Katie Zaferes</p>
                    <p><strong>From $136</strong> / person</p>
                </div>
            </div>
        </>
    )
}
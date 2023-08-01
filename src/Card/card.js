import React from 'react'
import './card.css'
import { useState } from 'react';
const Card = (props) => {
    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            <p className="text">
                {isReadMore ? text.props.children.slice(0, 50) : text}
                <span onClick={toggleReadMore} className="read-or-hide">
                    {isReadMore ? "...read more" : " show less"}
                </span>
            </p>
        );
    };
    return (
        <>
            <div className='col-md-4 col-sm-6 col-lg-3 mt-5 d-flex align-item-stretch'>
                <div className="card" >
                    <img src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body d-flex flex-column">
                        <h6 className="card-title">{props.title}</h6>
                        <h6 className='text-light '>
                            category:{props.category}
                        </h6>
                        <h5 className='text-light'>price:{props.price}</h5>
                        <ReadMore>
                            <p className="card-text text-center m-4">{props.description}</p>
                        </ReadMore>
                        <button href="#" className="btn btn-outline-light">addd to card</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
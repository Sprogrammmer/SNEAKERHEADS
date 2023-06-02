import React from "react";

const OrderCard = (props) => {
    const {id, name, gender, price, image, handleDelete} = props

    return (
        <div>
            <div className="master-container">
                <div className="card2 cart">
                <label className="title2">Item</label>
                <div className="products">
                    <div className="product">
                        <img src={image} className="imgTeni" alt="" />
                        <div>
                            <span>{name}</span>
                            <p>{gender}</p>
                        </div>
                        <div className="quantity">
                            <button>
                                <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#47484b" d="M20 12L4 12"></path>
                                </svg>
                            </button>
                            <label>1</label>
                            <button>
                                <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#47484b" d="M12 4V20M20 12H4"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="delete">
                            <button className="button" onClick={() => handleDelete(id)}>
                                <svg viewBox="0 0 448 512" className="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                            </button>
                        </div>
                        <label className="price small">{price.toFixed(2)}$</label>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCard;

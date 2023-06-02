import React from "react";
import Card from "../components/Card";
import sneakers from "../data/sneakers.json"

function ManSneakers () {
    const hombre = sneakers.adidas.concat(sneakers.nike, sneakers.jordan)
    .filter(item =>
        item.gender === "Men"
    )

    return (
        <div>
            <h1>Man Sneakers</h1>
            <div className="row container">
                {
                    hombre.map(item => (
                        <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                            <Card key={item.id} data={item}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ManSneakers;

import React from "react";
import Card from "../components/Card";
import sneakers from "../data/sneakers.json"

function AdidasSneakers () {
    const adidas = sneakers.adidas

    return (
        <div>
            <h1>Adidas Sneakers</h1>
            <div>
                <div className="row container">
                    {
                        adidas.map(item => (
                            <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                                <Card key={item.id} data={item}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AdidasSneakers;

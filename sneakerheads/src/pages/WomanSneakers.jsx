import React from "react";
import Card from "../components/Card";
import sneakers from "../data/sneakers.json"

function WomanSneakers () {
    const mujer = sneakers.adidas.concat(sneakers.nike, sneakers.jordan)
    .filter(item =>
        item.gender === "Women"
    )

    return (
        <div>
            <h1>Woman Sneakers</h1>
            <div>
                <div className="row container">
                    {
                        mujer.map(item => (
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

export default WomanSneakers;

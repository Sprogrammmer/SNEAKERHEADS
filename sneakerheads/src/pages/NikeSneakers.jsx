import React from "react";
import Card from "../components/Card";
import sneakers from "../data/sneakers.json"

function NikeSneakers () {
    const nike = sneakers.nike

    return (
        <div>
            <h1>Nike Sneakers</h1>
            <div>
                <div className="row container">
                    {
                        nike.map(item => (
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

export default NikeSneakers;

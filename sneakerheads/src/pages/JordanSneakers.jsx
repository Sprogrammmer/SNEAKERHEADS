import React from "react";
import Card from "../components/Card";
import sneakers from "../data/sneakers.json"

function JordanSneakers () {
    const jordan = sneakers.jordan

    return (
        <div>
            <h1>Jordan Sneakers</h1>
            <div>
                <div className="row container">
                    {
                        jordan.map(item => (
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

export default JordanSneakers;

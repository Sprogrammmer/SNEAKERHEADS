import React from "react";

function Home () {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/jordanAmarillo.svg" className="d-block w-100" id="carr" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/campusGreen.svg" className="d-block w-100" id="carr" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="/jordanGris.svg" className="d-block w-100" id="carr" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="tittle">
            <h1>BRANDS</h1>
            </div>

            <div className="infor">
                <a href="/NikeSneakers" id="adidas"><img src="src/assets/Nike.png" alt="" /></a>
                <a href="/AdidasSneakers" id="nike"><img src="src/assets/Adidas.png" alt="" /></a>
                <a href="/JordanSneakers" id="jordan"><img src="src/assets/Jordan.png" alt="" /></a>
            </div>
        </div>
    )
}

export default Home;

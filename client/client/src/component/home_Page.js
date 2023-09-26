import React from "react";
import one from './assets/one.png';
import two from './assets/two.png';
import three from './assets/three.png';

export function Home() {
    return (
        <>
        <div id="home_Bg">
            <div id="carouselExampleCaptions" className="carousel slide ">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={one} className="d-block w-100 carouselEffect"/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Floppy company @crations</h5>
                                <p>All computer accessories here</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={two} className="d-block w-100 carouselEffect" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={three} className="d-block w-100 carouselEffect" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Company Overview</h5>
                                <p>The @Floppy Products Overview</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div className="container">
            <h1 className="mt-3 fw-bold"><u><span className="nav_head p-2">Floppy Hardware Accessories</span></u></h1>
            <div class="card-group p-3 gap-3">
                <div class="card">
                    <img src={"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR5-WrqVYInSmoQVcrCnz41V09eZK3Wi-jDg8Wa11-x9Ds0tMDng-jfSPz1XdGKw7d-O-GSHgznZwHLQFiF-UQgb66AOLREXKrNmNNd_7plVDg8wGdlnUdlEg&usqp=CAE"} class="card-img-top" alt="..." style={{width: '13rem',height:'10rem'}}/>
                    <div class="card-body">
                    <h5 class="card-title">WD My Book 6TB USB 3.0 Desktop Hard Drive WDBBGB0060HBK-NESN</h5>
                    <h5 className="text-center text-primary">Price 40000</h5>
                    </div>
                </div>
                <div class="card">
                    <img src={"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRaTwyxkeyFmNA961kFjKcFPcQVVUdCNXv40bByh-hfuP7MqLVFD441YspTRlyE7K4kSzCwmRHxs9GYC9m513WRF-3Smt2bfwdVl4vqAuhnffV0vYN6wb-kbw&usqp=CAE"} class="card-img-top" alt="..." style={{width: '13rem',height:'10rem'}}/>
                    <div class="card-body">
                    <h5 class="card-title">Ever Forever Computer Components 20/24 Pin Hdd Tester Computer Components ATX</h5>
                    <h5 className="text-center text-primary">Price 29999</h5>
                    </div>
                </div>
                <div class="card">
                    <img src={"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRoVCuiFAz1CkFxassi1hVARiVBhZvABe1v7IMVqBKUJO7SXJFo81bIG08OnfqFeF9XlIJ7FGJHEtCg7cJygVNurnnKXm80BVCHk9I1CS_0maMa1IM2vO6DkA&usqp=CAE"} class="card-img-top" alt="..." style={{width: '13rem',height:'10rem'}}/>
                    <div class="card-body">
                    <h5 class="card-title">Gigabyte B450M DS3H motherboard Socket AM4 Micro ATX AMD B450</h5>
                    <h5 className="text-center text-primary">Price 49999</h5>
                    </div>
                </div>
            </div>
        </div>        
        <div className="container mt-3">
            <div class="card-group p-3 gap-3">
                <div class="card">
                    <img src={"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQYMaiWvmRQfu95bx19JYLqE3p6-53uAdT5fmMKwNTYjBHtAtHdj4FKHcMaFVLnvVhzTHp9c7Kvk2Jqz6C5P0KRDYOGqtSiU82_3mmVkl2bVXIOFvMByk-iCQ&usqp=CAE"} class="card-img-top" alt="..." style={{width: '13rem',height:'8rem'}}/>
                    <div class="card-body">
                    <h5 class="card-title">GameKM Black Acrylic Gaming PC Shell with Water Cooling and Dustproof RGB Side</h5>
                    <h5 className="text-center text-primary">Price 19999</h5>
                    </div>
                </div>
                <div class="card">
                    <img src={"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQmYGHQ5-Q5AOGe73oc0a1Ea_r48XIa2mQpHXy1LCOsoq7fnOTEvuv78JfSMHBRfrNL3g1hZV2sG1SziWhplqWzPKzEQW4U6Bzt4ZS7g0fi9HCExjQPoctLog&usqp=CAE"} class="card-img-top" alt="..." style={{width: '13rem',height:'8rem'}}/>
                    <div class="card-body">
                    <h5 class="card-title">SKULLSAINTS Ruby Mini PC 11th Gen Processor N5105 8GB DDR4 256GB SSD with Genuine</h5>
                    <h5 className="text-center text-primary">Price 35999</h5>
                    </div>
                </div>
                <div class="card">
                    <img src={"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ7a-cbtmj4DCydwfMuIK4MX5z5gUfVviQHOu0NaqwkVod9C3I5NAjZMViPXvC8CdZYddQz5rBef_9gQq-vFgUPSwupOsci2e9iySaI5Dx92nt2_SoKo37V&usqp=CAE"} class="card-img-top" alt="..." style={{width: '13rem',height:'10rem'}}/>
                    <div class="card-body">
                    <h5 class="card-title">Logitech M510 Mouse Wireless</h5>
                    <h5 className="text-center text-primary">Price 15999</h5>
                    </div>
                </div>
            </div>
        </div>  
        <div className="container mt-3">
            <div class="card-group p-3 gap-3">
                <div class="card">
                    <img src={"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQPPSrkMRDlQpx8p94vVvKipNdHHibBd6ioz97n6Gl4YwikZV1esddhmVRkXLtbINHZDwyQh2kgxi1PkfI1ZydBtYOMNNOC&usqp=CAE"} class="card-img-top" alt="..." style={{width: '13rem',height:'12rem'}}/>
                    <div class="card-body">
                    <h5 class="card-title">Mr.canicula Argb Pc Fans 120mm 3 Pack With Hub & Remote</h5>
                    <h5 className="text-center text-primary">Price 2509</h5>
                    </div>
                </div>
                <div class="card">
                    <img src={"https://img3.gadgetsnow.com/gd/images/products/additional/large/G448534_View_1/computer-laptop/laptops/hp-15s-fq3071tu-intel-celeron-n4500-15-6-inches-entertainment-laptop-8gb-512gb-ssd-windows-11-natural-silver-1-69-kg-.jpg"} class="card-img-top" alt="..." style={{width: '13rem',height:'12rem'}}/>
                    <div class="card-body">
                    <h5 class="card-title">HP 15s-Fq3071TU Intel Celeron N4500 15.6 Inches</h5>
                    <h5 className="text-center text-primary">Price 29999</h5>
                    </div>
                </div>
                <div class="card">
                    <img src={"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSkpRV_5qjXDQYLJ47c3zdbjSdqy5j9_P2xUsvWL1FWf0dGuyCVxH_RrYM-WGPmakCJHoAT-_0sMkN0cs5JGX4A9bKh9uE048seWqjKC8gWwxXEhO7klg8A&usqp=CAE"} class="card-img-top" alt="..." style={{width: '13rem',height:'10rem'}}/>
                    <div class="card-body">
                    <h5 class="card-title">Intel Assembled Desktop Core I3 4 Gb Ddr3/500 Gb/Windows</h5>
                    <h5 className="text-center text-primary">Price 14999</h5>
                    </div>
                </div>
            </div>
        </div>  
        </>
    );
}
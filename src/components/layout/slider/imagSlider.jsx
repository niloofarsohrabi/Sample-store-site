import React, { useState } from 'react'

import sliderStyle from './sliderStyle.module.scss'

export const ImageSlider = ({ sliders }) => {

    const [current, setCurent] = useState(0);
    const lenght = sliders.length;
    if (!Array.isArray(sliders) || sliders.lenght <= 0) {
        return null;
    }
    const prevButton = () => {
        setCurent(current === 0 ? lenght - 1 : current - 1);
    }
    const nextButton = () => {

        setCurent(current === lenght - 1 ? 0 : current + 1);
    }

    return (
        <>

            <div className={sliderStyle.slides}>
                {sliders.map((item, index) => {
                    return (

                        <div key={index} className={index === current ? `${sliderStyle.slideActive}` : `${sliderStyle.slide}`}>
                            {index === current && (
                                <div>
                                    <div className={sliderStyle.sliderImage}>
                                        <img src={item.imageAddress} alt="slider" />
                                    </div>
                                    <div className={sliderStyle.leftArrow} onClick={() => prevButton()}>
                                        {/* <ArrowBackIos style={{ fontSize: 30 }} /> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="30" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                                            <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                                        </svg>
                                    </div>
                                    <div className={sliderStyle.rightArrow} onClick={() => nextButton()}>
                                        {/* <ArrowForwardIos style={{ fontSize: 30 }} /> */}

                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="30" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                                            <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                                        </svg>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-10">
                                                <h5 className={sliderStyle.messgaeOnSliderOne}>{item.textOnSliderOne}</h5>
                                                <h4 className={sliderStyle.messgaeOnSliderTwo}>{item.textOnSliderTwo}</h4>
                                                <h1 className={sliderStyle.messgaeOnSliderThree}>{item.textOnSliderThree}</h1>
                                                <button className={sliderStyle.buttonSlider}>SHOP NOW</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                    )
                })}
            </div>



        </>
    )
}

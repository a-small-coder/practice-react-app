import { useState } from "react"
import img3 from '../../assets/Group 1.png'

const MainSlider = () => {

    const [dots, setDots] = useState([
        {
            id: 1,
            clicked: true
        },
        {
            id: 2,
            clicked: false
        },
        {
            id: 3,
            clicked: false
        },
    ])
    

    const handleClick = (id) => {
        const newDots = dots.map( dot => {
            if (id === dot.id) {
                return {
                    id: dot.id,
                    clicked: true
                }
            }
            return {...dot, clicked:false}
        })
        setDots(newDots)

    }

    const dotItems = dots.map( dot => (
        <div 
            key={dot.id} 
            class={`dot ${dot.clicked ? '_active' : ""}`}
            onClick={() => handleClick(dot.id)}
        >

    </div>
    ))

    return (
        <div class="header__slider slider-header">
                <div class="slider-header__slide heder-slide">
                    <div class="header-slide__figure">
                        <img src={img3}/>
                    </div>

                    <div class="header-slide__content hero-content">
                        <h2 class="hero-content__title _title">
                            Furniture collection
                        </h2>
                        <div class="hero-content__divider">

                        </div>
                        <div class="hero-contnent__text">
                            <p class="common-text"> 
                                Deep v you probably haven't heard of them banh mi synth actually affogato. Aesthetic lyft ethical drinking vinegar austint

                            </p>
                        </div>
                    </div>

                </div>

                <div class="slider-header__dots dots">
                    {dotItems}
                </div>
            </div>
    )
}

export default MainSlider
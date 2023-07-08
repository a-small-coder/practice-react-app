import'./pictures.css'
import {useState} from 'react'




function Pictures(){

    const [buttons, setButtons] = useState([
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
        {
            id:4,
            clicked:false
        },
        {
            id:5,
            clicked:false
        },
    ])
    
    const ActiveClick = (id) => {
        const newButtons = buttons.map( button => {
            if (id === button.id) {
                return {
                    id: button.id,
                    clicked: true
                }
            }
            return {...button, clicked:false}
        })
        setDots(newDots)
    }



return (
    <section>
    <div class = "pictures_container">
        <div class = "Buttons">
            <button class = "BR" data-filter = ".bedroom">Bedroom furniture</button>
            <button class = "LRF" data-filter = ".living">Living room furniture</button>
            <button class = "OF" data-filter = ".office">Office furniture</button>
            <button class = "DRF" data-filter = ".dining">Dining room furniture</button>
            <button class = "Chair_UpperWord" data-filter = ".category-chair">Chair</button>
            </div>
        <div class = "in_gallery">
        </div>
        </div>
        </section>
    

)
    }


export default Pictures
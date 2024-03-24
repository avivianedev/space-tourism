import './Information.modules.scss'
import data from '../../data/planets.data.json'
import { useState } from 'react'

const Information = () => {

    const [id, SetID] = useState('moon')

    return (
        <section className="info-container">

            {data.map((i: any) => (
                <>
                    <div className="image-planet">
                        <img src={i[id]['image']} alt="image moon" />

                    </div>

                    <div className="planets-content-text">
                        <ul className="planets-list">
                            <li onClick={(e) => { e.preventDefault(); SetID('moon') }} className="planets-list-items"><a href="">moon</a></li>
                            <li onClick={(e) => { e.preventDefault(); SetID('mars') }} className="planets-list-items"><a href="">mars</a></li>
                            <li onClick={(e) => { e.preventDefault(); SetID('europe') }} className="planets-list-items"><a href="">europe</a></li>
                            <li onClick={(e) => { e.preventDefault(); SetID('titan') }} className="planets-list-items"><a href="">titans</a></li>
                        </ul>
                        <h1>{i[id]['title']}</h1>
                        <p>{i[id]['description']}</p>
                        <div className="line">
                            <hr />
                        </div>
                        <div className="planet-distance-travel-container">
                            <div className='planet-distance-travel-content'>
                                <p>avg. distance</p>
                                <h3>{i[id]['distance']}</h3>
                            </div>
                            <div className='planet-distance-travel-content'>
                                <p>est. travel time</p>
                                <h3>{i[id]['travel']}</h3>
                            </div>
                        </div>
                    </div>
                </>
            ))}


        </section>
    )
}

export default Information
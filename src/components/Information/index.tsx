import './Information.modules.scss'
import data from '../../data/planets.data.json'


const Information = () => {

    return (
        <section className="info-container">
            <div className="image-planet">
                <img src="../src/assets/destination/image-moon.png" alt="image moon" />

            </div>
            <div className="planets-content-text">
                <ul className="planets-list">
                    <li className="planets-list-items"><a href="">moon</a></li>
                    <li className="planets-list-items"><a href="">mars</a></li>
                    <li className="planets-list-items"><a href="">europe</a></li>
                    <li className="planets-list-items"><a href="">titans</a></li>
                </ul>
                <h1>moon</h1>
                <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                <div className="line">
                    <hr />
                </div>
                <div className="planet-distance-travel-container">
                    <div className='planet-distance-travel-content'>
                        <p>avg. distance</p>
                        <h3>384,400 km</h3>
                    </div>
                    <div className='planet-distance-travel-content'>
                        <p>est. travel time</p>
                        <h3>3 days</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Information
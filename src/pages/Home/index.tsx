import Navbar from '../../components/Navbar'
import './Home.modules.scss'


const Home = () => {
    return (
        <>
            <section className='home-container'>
                <header>
                    <Navbar />
                </header>
                <section className='home-content'>
                    <div className='home-text'>
                        <h5>SO, YOU WANT TO TRAVEL TO</h5>
                        <h1>SPACE</h1>
                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <div className='home-image-space-oval'>
                        <div className='oval'>
                            <span>EXPLORE</span>
                        </div>

                    </div>
                </section>

            </section>

        </>
    )
}

export default Home 
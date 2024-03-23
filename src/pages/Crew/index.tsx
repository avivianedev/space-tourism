import './Crew.modules.scss'
import Navbar from '../../components/Navbar'
import Title from '../../components/Title'

const Crew = () => {

    return (
        <section className="crew-container">
            <header>
                <Navbar />
            </header>

            <Title
                n={'02'}
                title={'meet your crew'}
            />
        </section>
    )
}

export default Crew
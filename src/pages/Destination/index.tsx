import './Destination.modules.scss'
import Navbar from '../../components/Navbar'
import Title from '../../components/Title'
import Information from '../../components/Information'

const Destination = () => {

    return (
        <section className="destination-container">
            <header>
                <Navbar />
            </header>

            <Title
                n={'01'}
                title={'Pick your destination'}
            />

            <Information />
        </section>
    )
}

export default Destination
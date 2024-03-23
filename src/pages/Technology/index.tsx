import './Technology.modules.scss'
import Navbar from '../../components/Navbar'
import Title from '../../components/Title'


const Technology = () => {

    return (
        <section className="technology-container">
            <header>
                <Navbar />
            </header>
            <Title
                n={'03'}
                title={'space launch 101'}
            />
        </section>
    )
}

export default Technology
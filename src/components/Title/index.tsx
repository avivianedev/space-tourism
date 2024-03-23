import './Title.modules.scss'

type PropsDestination = {
    n: string,
    title: string
}

const Title = ({ n, title }: PropsDestination) => {


    return (
        <section className='title-container'>
            <span className='number'>{n}</span>
            <h1 className='title'>{title}</h1>
        </section>
    )
}

export default Title
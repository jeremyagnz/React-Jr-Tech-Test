import { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export function App() {

    const [random, setRandom] = useState(true)
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
                setLoading(true);
            });
    }, [random])

    useEffect(() => {
        if (!fact) return;

        const threeFirstWord = fact.split(' ', 3).join('')
        fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`)
            .then(res => {
                const { url } = res
                setImageUrl(url);
                setLoading(false);
            })
    }, [fact])


    return (
        <main>
            <h1> Jr Test Tech </h1>
            <button onClick={() => setRandom(prev => !prev)}>

                Generar Nueva imagen
            </button>

            <section>
                {fact && <p> {fact} </p>}
                {loading ? (<img src="/src/assets/loading.svg" className="loading-img" alt="Cargando..." />)
                    : (imageUrl && <img src={imageUrl} className="imgUrl" alt={`Imagen generada por las tres primeras palabras del hecho`} />)}
            </section>

        </main>
    )
}

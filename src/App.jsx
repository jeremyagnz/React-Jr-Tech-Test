import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export function App() {

    const [fact, setFact] = useState('Lorem Ipsum')

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => setFact(data.fact))

        return () => { }
    }, [])


    return (
        <main>
            <h1> Jr Test Tech </h1>
            { fact && <p> {fact} </p> }
        </main>
    )
}

import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export function App() {

    const [fact, setFact] = useState('Lorem Ipsum')
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const {fact} = data
                setFact(fact)
                const firstWord = fact.split('')[0];
                console.log(firstWord)
    
            });

          
        return () => { }
    }, [])


    return (
        <main>
            <h1> Jr Test Tech </h1>
            { fact && <p> {fact} </p> }
        </main>
    )
}

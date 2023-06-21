import { CatFact, Loading } from './component';
import React, { useState, useEffect } from 'react';
import './App.scss';

function App() {

    const [ data, setData ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);

    // Daten holen
    const fetchData = async () => 
    {
        const catData = await ((await fetch('https://catfact.ninja/fact'))).json();
        setData(catData);
        setIsLoading(false);
    }

    useEffect(() => 
    {
        // ladezeit simulieren
        setTimeout(() => {
            // Funktion aufrufen, die die Daten fetcht
            fetchData();         
        }, 3000);
    }, []);


    return (
        <div className='App'>
            {
                !isLoading?
                (
                    <>
                        <CatFact 
                            cat={data}
                            handleClick={fetchData}
                        />
                    </>
                )
                :
                (
                    <>
                        <Loading/>
                    </>
                )
            }
        </div>
    )
}

export default App

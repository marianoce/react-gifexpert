import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['Saint Seiya', 'Ranma', 'Detective Conan'];
    const [categories, setCategories] = useState(['Saint Seiya'])

    // const handleAdd = () => {
    //     setCategories(categories => [...categories, 'Cowboy bebop']);
    // }

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(cat => 
                        <GifGrid
                            key={ cat }
                            category={ cat } 
                        />
                    )
                }
            </ol>
        </>
    )
}

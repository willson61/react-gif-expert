import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'How I Met Your Mother', 'Star Wars' ])
    
    const onAddCategory = (newCategory) => {
        // categories.push(newCategory);

        // if(categories.includes(newCategory)) return;

        setCategories( [newCategory, ...categories, ] );
        // setCategories( cat => [...cat, 'Assassin Creed'] );
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={ (value) => onAddCategory(value)  } 
            />            

            { 
                categories.map( category => (
                    <GifGrid key={ category } category={ category } />
                )) 
            }

        </>
    )
}

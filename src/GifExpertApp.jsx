import {useState} from 'react'
// import AddCategory from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';

import { GifGrid, AddCategory } from './components/index';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punche'])
    console.log(categories);
    
    const onAddCategory = (newCategory) => {

        // setCategories((c) => [...c,'Categoria'] );

        if(categories.includes(newCategory)) return;

        setCategories([...categories, newCategory])

    }


    return (
        <>
            {/* titulo */}

            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory onNewCategory={onAddCategory}/>


            {/* listado de gifts */}

                {categories.map((category) => (
                   <GifGrid key={category} category={category}/>
                ))
                }
        </>

    )
}

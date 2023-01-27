import {useState} from 'react'
import { AddCategory,GifGrid } from './components';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['one']);
    // console.log(categories);
    const onAddCategory=(newCategory)=>{
        // console.log(newCategory);
        if (categories.includes(newCategory)) return;
        setCategories([newCategory,...categories])
    };
  return (
    <>
        <h1>GifExpertApp</h1>
        {/* <AddCategory setCategories={setCategories}/> */}
        <AddCategory onNewCategory={onAddCategory}/>
        {/* <button onClick={onAddCategory}>AGREGAR</button> */}

            {categories.map(category=>(
                <GifGrid 
                key={category} 
                category={category}
                />
            )
            )}

    </>
  )
}

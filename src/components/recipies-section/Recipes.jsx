
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Recipe from './Recipe';

const Recipes = ({handleClick}) => {

      const [recipes, setRecipes] = useState([])
      console.log(recipes)

      useEffect(()=>{
            fetch('recipes.json')
            .then(res=> res.json())
            .then(data => setRecipes(data))
      },[])

    return (
        <div className='col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
           
            {
            recipes.map(item => <Recipe key={item.recipe_id} card ={item} handleClick={handleClick}></Recipe> )
            }
        </div>
    );
};

Recipes.propTypes = {
    handleClick : PropTypes.func.isRequired
};

export default Recipes;

import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import OurRecipes from './components/our-recipes/OurRecipes';
import Recipes from './components/recipies-section/Recipes';
import Sidebar from './components/sidebar/Sidebar';
import { useState } from 'react';
function App() {
  
// 
 const [toCook, setToCook]= useState(0);
 const [toCookItem, setToCookItem] =useState([]);
 console.log(toCookItem)

 const handleClick = (cardObj) =>{
     setToCook(toCook+1)
     const newToCookItem = [...toCookItem,cardObj]
    setToCookItem(newToCookItem)
    
 }



  return (
    <>
      {/* header-section */}
      <Header></Header>
      {/* banner-section */}
      <Banner></Banner>
      {/* our-recipes-section */}
      <OurRecipes></OurRecipes>
      {/* recipes card-section */}
       <section className='grid grid-cols-1 md:grid-cols-3 gap-10 place-content-between container w-11/12 mx-auto '>
          {/* recipes card */}
          <Recipes handleClick = {handleClick}></Recipes>
         
          {/* sidebar */}
         <Sidebar toCookItem={toCookItem} toCook={toCook}></Sidebar>
       </section>
    </>
  )
}

export default App

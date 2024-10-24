
import PropTypes from 'prop-types';
import CurrentlyCoking from './CurrentlyCoking';
import { useState } from 'react';

const Sidebar = ({toCook,toCookItem}) => {
   const[handleItem,sethandleItem] = useState([]);
//  for total time
   const [handleAddTime,setHAndleAddTime] =useState(0);
//    for total cal
   const [handleAddCal,setHAndleAddCal] =useState(0);
//    


   const handlePreparingBtn = (item)=>{
    const newHandleItem = [...handleItem,item]
      sethandleItem(newHandleItem);
 
// For total time and calories 
       const {calories,preparing_time} = item;
        const addTime = Number( preparing_time + handleAddTime );
        const addCal = Number (handleAddCal + calories)
        setHAndleAddTime(addTime);
        setHAndleAddCal(addCal)
    // 
    document.getElementById('total').classList.remove('hidden');
    document.getElementById('currentlycooking').classList.remove('hidden');
    document.getElementById('invisible1').classList.remove('hidden');
    

   }




    // console.log(toCook.toString().length)
    return (
        <div className='col-span-1 border border-slate-400 rounded-lg p-6'>
            <span className='text-xl capitalize font-semibold text-center border-b border-[#28282826] text-[#282828] block w-4/5 mx-auto mb-6 pb-4'> Want to cook :{toCook} </span>
            <div  className='flex flex-col gap-3'>
                    <div id='invisible' className='hidden' >
                        <div  className='fira-font text-[#282828B3] font-normal flex justify-between items-center gap-12 '>
                        <span className='invisible'>1</span> <span>Name</span><span> Time</span><span>Calories</span> 
                        <button  className='invisible bg-[#0BE58A] rounded-full py-1 px-5 text-base text-black font-medium'>Preparing</button>
                        </div>
                    </div>
                   {
                     toCookItem.map( item =>(
                              <div key={item.id}>
                               
                                <div  className='bg-[#28282808] fira-font text-[#282828B3] font-normal flex justify-between items-center gap-4 p-6 rounded-lg '>
                                    <span>{ toCookItem.indexOf(item)}</span>
                                    <span>{item.recipe_name}</span>
                                    <span>{item.preparing_time} minutes</span>
                                    <span>{item.calories} calories</span> 
                                    <button onClick={()=>handlePreparingBtn(item)} className=' bg-[#0BE58A] rounded-full py-1 px-5 text-base text-black font-medium'>Preparing</button>  
                                  </div>  
                              </div>
                            
                     ))
                   }
                
            </div>
           
            <CurrentlyCoking handleAddTime={handleAddTime} handleAddCal={handleAddCal} toCookItem={handleItem}></CurrentlyCoking>
        </div>
    );
};

Sidebar.propTypes = {
    
};

Sidebar.propTypes = {
    toCook : PropTypes.func.isRequired,
    toCookItem: PropTypes.object.isRequired
};
export default Sidebar;
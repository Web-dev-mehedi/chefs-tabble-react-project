
import PropTypes from 'prop-types';



const CurrentlyCoking = ({toCookItem,handleAddTime,handleAddCal}) => {

     
  
    return (
        <div>
            <div  className='flex flex-col gap-3 mt-8'>
            <span id='currentlycooking' className='hidden text-xl capitalize font-semibold text-center border-b border-[#28282826] text-[#282828] w-4/5 mx-auto mb-6 pb-4'>Currently cooking: {toCookItem.length} </span>

                    <div id='invisible1' className='hidden' >
                        <div  className='fira-font text-[#282828B3] font-normal flex justify-between items-center gap-20  '>
                        <span className='invisible'>1</span> <span>Name</span><span> Time</span><span>Calories</span> 
                        <button  className='invisible bg-[#0BE58A] rounded-full py-1 px-5 text-base text-black font-medium'>Preparing</button>
                        </div>
                     </div>

                   {
                     toCookItem.map( item =>(   
                      
                              <div key={item.id}>
                                <div  className='bg-[#28282808] fira-font text-[#282828B3] font-normal flex justify-between items-center gap-4 p-6 rounded-lg '>
                               
                                    <span>{item.recipe_name}</span>
                                    <span>{item.preparing_time} minutes</span>
                                    <span>{item.calories} calories </span> 
                                  
                                  </div>  
                                 
                              </div>
                           
                     ))
                   }


                       <div className=' flex flex-col items-end text-slate-500'>
                             <div id='total' className='hidden'>
                                <span className='block text-left'>Total Time = {handleAddTime} minutes</span>
                                <span>Total Calories = {handleAddCal} calories</span>
                             </div>
                        </div>  
                  
                
            </div>
        </div>
    );
};

CurrentlyCoking.propTypes = {
    toCookItem: PropTypes.array.isRequired ,
    handleAddTime: PropTypes.number.isRequired,
    handleAddCal: PropTypes.number.isRequired
};

export default CurrentlyCoking;

import PropTypes from 'prop-types';


const Sidebar = ({toCook,toCookItem}) => {
    // console.log(toCook.toString().length)
    return (
        <div className='col-span-1 border border-slate-400 rounded-lg p-6'>
            <span className='text-xl capitalize font-semibold text-center border-b border-[#28282826] text-[#282828] block w-4/5 mx-auto mb-6 pb-4'> Want to cook :{toCook} </span>
            <div  className='flex flex-col gap-3'>
                   {
                     toCookItem.map( item =>(
                             <div key={item.id} className='bg-[#28282808] fira-font text-[#282828B3] font-normal flex justify-between items-center gap-4 p-6 rounded-lg '>
                                 <span>{item.recipe_name}</span>
                                <span>{item.preparing_time}</span>
                                <span>{item.calories}</span> 
                                <button className=' bg-[#0BE58A] rounded-full py-1 px-5 text-base text-black font-medium'>Preparing</button>  
                            </div>
                     ))
                   }
                
            </div>
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
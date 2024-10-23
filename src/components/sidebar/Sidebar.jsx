
import PropTypes from 'prop-types';


const Sidebar = ({toCook}) => {
 
    console.log(toCook.toString().length)
    return (
        <div className='col-span-1 border border-slate-400 rounded-lg'>
            <span className='text-xl capitalize font-semibold text-center border-b border-[#28282826]'> Want to cook :{toCook} </span>
        </div>
    );
};

Sidebar.propTypes = {
    
};

Sidebar.propTypes = {
    toCook : PropTypes.func.isRequired,
};
export default Sidebar;
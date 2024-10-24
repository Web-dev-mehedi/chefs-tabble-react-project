import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from 'prop-types';

const Recipe = ({card,handleClick}) => {
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories,recipe_id}= card;
    
    return (
            <div>
              <div className="card bg-base-100  border border-[#28282833] p-6 ">
                <figure className="w-full mx-auto ">
                    <img
                    src={recipe_image}
                    alt="Shoes"
                    className="rounded-xl w-full object-cover mx-auto h-[220px]" />
                </figure>

                {/* card body */}
                  <div className="pt-7 space-y-5 text-left">
                    <h2 className="card-title">{recipe_name}</h2>
                        <p className='border-b border-[#2828281A] pb-6 fira leading-8'>{short_description}</p>
                        {/* ingredients item */}
                     <div className='space-y-4 border-b border-[#2828281A] pb-6'>
                        <h2 className='text-lg font-medium capitalize'>ingredients : {ingredients.length}</h2>
                         {
                            ingredients.map((item,idx) => (
                                <ul className='fira pl-10' key={idx}>
                                    <li>{item}</li>
                                </ul>
                               
                            ))
                         }
                     </div>
                     {/* time and calories  */}
                        <div className='fira-font text-sm font-normal text-[#282828CC] flex gap-7 justify-start items-center'>
                            <span className="flex gap-2 justify-start items-center"><IoMdTime /> {preparing_time} minutes</span> 
                            <span className="flex gap-1 justify-start items-center"><AiOutlineFire />{calories} calories</span>
                        </div>
                        {/* button */}
                      <div className="card-actions">
                       <button onClick={()=>handleClick(card)} className="btn bg-[#0BE58A] rounded-full px-8 text-lg">Want to Cook</button>
                     </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    card : PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Recipe;
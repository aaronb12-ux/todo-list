import ShowTasks from "../components/ShowTasks";
import {useState} from "react";
function FilterButton({tasks, setTasks})
{

    const [showdropdown, setShowdropdown] = useState(false);


    const sortedTasksDate = () => {
        setTasks([...tasks].sort((a, b) => b.id - a.id));

    }
    const sortedTasksPriority = () => {
        setTasks([...tasks].sort((a, b) => b.priority_number - a.priority_number));
    }

    const toggleDropDown = () => {

        let dropdownButton = document.querySelector('#dropdownButton #dropdown');
        dropdownButton.classList.toggle('hidden');
    }



    return (

        <div>
            <div className="position: relatvie"  id="dropdownButton"  onClick={() => toggleDropDown()}>
                <div
                     className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 transition duration-400 pl-3 pr-3 pt-2 pb-2 w-24 flex justify-between"
                    >
                    All
                    </div>

                    <div className="postition: absolute bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl pl-2 pr-2"
                         id="dropdown">
                        <div className="cursor-pointer" onClick={() => sortedTasksDate()}> <span className="text-xs">Most Recent</span> </div>
                        <div className="cursor-pointer" onClick={() => sortedTasksPriority()}> <span className="text-xs">Priority</span></div>

                    </div>

            </div>
        </div>
    )
}

export default FilterButton


//bg-gray-400 text-white pl-3 pr-3 pt-2 pb-2 rounded font-bold w-24 flex justify-between"
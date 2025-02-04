import ShowTasks from "../components/ShowTasks";
import {useState} from "react";
function FilterButton({tasks, setTasks})
{

    const [showdropdown, setShowdropdown] = useState(false);
    const [current, setCurrent] = useState("Date");

    const sortedTasksDate = () => {
        setTasks([...tasks].sort((a, b) => b.id - a.id));
        setCurrent("Date");
        setShowdropdown(false);
    }
    const sortedTasksPriority = () => {
        setTasks([...tasks].sort((a, b) => b.priority_number - a.priority_number));
        setCurrent("Priority");
        setShowdropdown(false);
    }

    const ShowDropDown = () => {
        if (showdropdown === true) {
            setShowdropdown(false);
            return;
        }
        setShowdropdown(true);
    }


    return (

        <div>

                <button
                    onClick={() => {ShowDropDown()}}
                     className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl pl-3 pr-3 pt-2 pb-2 w-24 flex justify-between" >
                    {current}
                    <p>
                        ▼
                    </p>

                </button>

            {showdropdown === true ?
                <div className="absolute  bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl w-24">
                <button
                    onClick={() => {sortedTasksDate()}}
                    className="block ml-2">
                    Date
                </button>
                <button
                    onClick={() => {sortedTasksPriority()}}
                    className="ml-2"
                >
                    Priority
                </button>
                </div>
                : null

            }

        </div>
    )
}

export default FilterButton



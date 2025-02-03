import { useState } from 'react'
import AddTaskButton from "./components/AddTaskButton.jsx";
import AddEntry from "./components/AddEntry.jsx";
import FilterButton from "./components/FilterButton.jsx";
import ShowTasks from "./components/ShowTasks.jsx";

function ToDoList() {

    const [isformVisible, setIsformVisible] = useState(false);
    const [tasks, setTasks] = useState([])





    return (
        <div className="bg-slate-100 h-screen">

            <h1 className="flex justify-center   text-5xl font-extrabold text-indigo-600 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300">
                Todo List
            </h1>

            <div className="flex justify-center items-center">
                <AddTaskButton
                    setIsformVisible={setIsformVisible}
                />
                <FilterButton
                    tasks={tasks}
                    setTasks={setTasks}
                />
            </div>


            <ShowTasks
                tasks={tasks}
                setTasks={setTasks}

            />



            <AddEntry
                isformVisible={isformVisible}
                setIsformVisible={setIsformVisible}
                tasks={tasks}
                setTasks={setTasks}
            />

        </div>

    )

}

export default ToDoList
/*

<h1 className="flex justify-center ">
               <span className="mt-2.5 font-extrabold text-3xl text-gray-500">TODO LIST</span>
            </h1>


 */
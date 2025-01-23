import { useState } from 'react'
import AddTaskButton from "./components/AddTaskButton.jsx";
import AddEntry from "./components/AddEntry.jsx";
import FilterButton from "./components/FilterButton.jsx";

function App() {

    const [isformVisible, setIsformVisible] = useState(false);
    const [todos, setTodos] = useState([])

    return (
        <div className="bg-slate-100 h-screen">
            <h1 className="flex justify-center ">
               <span className="mt-2.5 font-extrabold text-3xl text-gray-500">TODO LIST</span>
            </h1>

            <div>
            <AddTaskButton
            setIsformVisible={setIsformVisible}
            />
                <FilterButton
                    />
            </div>

            <AddEntry
                />
        </div>

    )

}

export default App

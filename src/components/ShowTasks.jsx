import { Trash2 } from "lucide-react";
import { Pen } from "lucide-react";
function ShowTasks({tasks, setTasks}) {

    const handleDelete = (id) =>
    {
        const updatedtaks = tasks.filter((task) => task.id !== id)
        setTasks(updatedtaks);
    }


    return (
        <div className="flex justify-center ml-5px">
            <ul>
                {tasks.map((task) => (
                    <li className="w-80 block shadow border rounded py-2 px-3 text-gray-700 mt-3 flex justify-between items-center">
                        {task.text}
                        <div>
                            <button className="p-2 hover:text-red-500 cursor-pointer mr-2" onClick={() => handleDelete(task.id)}>
                                <Trash2 size={16} />
                            </button>
                            <button className="hover:text-blue-700 cursor-pointer">
                                <Pen size={16} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default ShowTasks;

//key={index} onClick={() => handleDelete(task.id)}
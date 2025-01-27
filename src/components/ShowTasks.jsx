import { Trash2 } from "lucide-react";
import { Pen } from "lucide-react";
import { Save } from "lucide-react";
import {useState} from "react";
import {Edit} from "lucide";
function ShowTasks({tasks, setTasks}) {

    const [editTask, setEditTask] = useState('');
    const [inputField, setInputField] = useState("");

    const handleTaskChange = (input, id) => {

        for (let task of tasks)
        {
            if (task.id === id)
            {
                task.text = input;
            }
            setTasks([...tasks]);
        }

        setEditTask('');
        setInputField('');

    }

    const handleEdit = (id, task) => {
        setEditTask(id);
        setInputField(task)
    }

    const handleDelete = (id) =>
    {
        const updatedtaks = tasks.filter((task) => task.id !== id)
        setTasks(updatedtaks);
    }

    return (

        <div className="flex justify-center ml-5px">
            <ul>
                {tasks.map((task) => (
                <div>
                    <li className="w-80 shadow border rounded py-2 px-3 text-gray-700 mt-3 flex justify-between items-center">

                        {editTask === task.id ?
                            <form>
                                <input className="bg-slate-100"
                                       value={inputField}
                                       onChange={(e) => setInputField(e.target.value)}
                                />
                            </form>
                        : task.text
                        }
                        <div>

                            <button className="hover:text-red-500 cursor-pointer" onClick={() => handleDelete(task.id)}>
                                <Trash2 size={16} />
                            </button>
                            <button className="hover:text-blue-700 cursor-pointer" onClick={() => handleEdit(task.id, task.text)}>
                                <Pen size={16} />
                            </button>
                            {editTask === task.id ?
                                <button className="mb -bottom-4 hover:text-yellow-300" onClick={() => handleTaskChange(inputField, task.id)} >
                                    <Save size={16}   />
                                </button>
                                : null
                            }
                        </div>
                    </li>
                </div>
                ))}
            </ul>
        </div>

    )
}

export default ShowTasks;

//key={index} onClick={() => handleDelete(task.id)}
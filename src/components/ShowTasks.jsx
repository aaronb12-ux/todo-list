import { Trash2 } from "lucide-react";
import { Pen } from "lucide-react";
import { Save } from "lucide-react";
import {useState} from "react";
import {Edit} from "lucide";
import Priority from "../components/Priority";

function ShowTasks({tasks, setTasks}) {

    const [editTask, setEditTask] = useState('');
    const [inputField, setInputField] = useState("");
    const [selectedField, setSelectedField] = useState("");



    const handleTaskChange = (input, id) =>
    {

        for (let task of tasks)
        {
            if (task.id === id)
            {
                if(selectedField === "text"){
                    task.text = input;
                }
                else if (selectedField === "priority"){
                    switch (input) {
                        case "1":
                            task.priority = "Low";
                            task.priority_number = "1";
                            break
                        case "2":
                            task.priority = "Medium";
                            task.priority_number = "2";
                            break
                        case "3":
                            task.priority = "High";
                            task.priority_number = "3";
                            break
                        default:
                            break;
                    }

                }
                else if (selectedField === "date"){
                    task.date = input;
                }
            }
            setTasks([...tasks]);
        }
        setEditTask('');
        setInputField('');
        setSelectedField('');
    }

    const handleEdit = (id, text, field) =>
    {
        if (field === "text"){
            setSelectedField("text");
        }
        else if (field === "priority"){

            setSelectedField("priority");
        }
        else if (field === "date") {
            setSelectedField("date");
        }

        setEditTask(id);
        setInputField(text);

    }

    const priority_change = (priority_number) => {
        setInputField(priority_number);
    }

    const handleDelete = (id) =>
    {
        const updatedtasks = tasks.filter((task) => task.id !== id)
        setTasks(updatedtasks);
    }

    return (

        <div className="flex justify-center ml-5px">
            <ul>
                {tasks.map((task) => (
                <div className="mt-3 p-2 pt-2 pb-2 box-border bg-slate-200 rounded-md ">
                    <li className="w-96 h-20 shadow border rounded py-2 px-3 text-gray-700 flex justify-between items-center bg-white">

                        {editTask === task.id ?
                            <form>
                                {selectedField === "priority" ?
                                    <div className="px-8 mt-6">

                                        <div className={"inline"}>
                                            {inputField === "1" ?
                                                <button
                                                    className={"border px-4 p-2 h-11 bg-green-500 font-medium rounded-bl-md rounded-tl-md  text-white "}
                                                    type="button"
                                                    onClick={() => priority_change("1")}>
                                                    Low
                                                </button> :
                                                <button
                                                    className="border px-4 h-11 p-2 bg-white font-medium rounded-bl-md rounded-tl-md "
                                                    type="button"
                                                    onClick={() => priority_change("1")}>
                                                    Low
                                                </button>
                                            }
                                        </div>
                                        <div className={"inline"}>
                                            {inputField === "2" ?
                                                <button
                                                    className={"border p-2 h-11 bg-yellow-500 font-medium text-white"}
                                                    type="button"
                                                    onClick={() => priority_change("2")}>
                                                    Medium
                                                </button> :
                                                <button
                                                    className="border h-11 p-2 bg-white font-medium"
                                                    type="button"
                                                    onClick={() => priority_change("2")}>
                                                    Medium
                                                </button>
                                            }
                                        </div>
                                        <div className={"inline"}>
                                            {inputField === "3" ?
                                                <button
                                                    className={"border  px-4 h-11 bg-red-500 font-medium rounded-tr-md rounded-br-md text-white mr-2"}
                                                    type="button"
                                                    onClick={() => priority_change("3")}>
                                                    High
                                                </button> :
                                                <button
                                                    className="border px-4 h-11 bg-white font-medium rounded-tr-md rounded-br-md mr-2 "
                                                    type="button"
                                                    onClick={() => priority_change("3")}>
                                                    High
                                                </button>
                                            }
                                        </div>
                                    </div>
                                    : <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-right
                                focus:outline-none mt-6 font-bold"
                                             placeholder="Enter New Field"
                                        //values={inputField}
                                             onChange={(e) => setInputField(e.target.value)}
                                    />
                                }
                                <span className="w-0.5 h-5 bg-black ml-0.5 animate-[blink_1s_ease-in-out_infinite]"/>
                            </form>

                            : <div className="pb-6 mt-5 text-2xl font-serif">
                                {task.text}
                                <button className="hover:text-blue-700 cursor-pointer ml-2"
                                        onClick={() => handleEdit(task.id, task.text, "text")}>
                                    <Pen size={15}/>
                                </button>
                                <div
                                    className="text-sm">Priority: {task.priority}
                                    <button className="hover:text-blue-700 cursor-pointer ml-2"
                                            onClick={() => handleEdit(task.id, task.priority_number, "priority")}>
                                        <Pen size={10}/>
                                    </button>
                                </div>
                                <div className="text-sm">Date Made: {task.date}
                                    <button className="hover:text-blue-700 cursor-pointer ml-2"
                                            onClick={() => handleEdit(task.id, task.date, "date")}>
                                        <Pen size={10}/>
                                    </button>
                                </div>

                            </div>
                        }
                        <div>
                            {editTask === task.id ?
                                <button
                                    className="p-2 -bottom-4 mr-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 "
                                    onClick={() => handleTaskChange(inputField, task.id)}>
                                    Save
                                </button>
                                : <button className="hover:text-red-500 cursor-pointer"
                                          onClick={() => handleDelete(task.id)}>
                                    <Trash2 size={30}/>
                                </button>
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

//there is one sta
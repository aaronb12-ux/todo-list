import {useState} from 'react';

function AddEntry({isformVisible, setIsformVisible, tasks, setTasks}) {
    const [current_input_field, setCurrent_input_field] = useState("");
    const [current_priority, setCurrent_priority] = useState("");
    const [date_made, setDate_made] = useState("");

    const handleInput = (value, priority, date_made) => {

        let Priority;

        switch (priority) {
            case "1":
                Priority = "Low";
                break;
            case "2":
                Priority = "Medium";
                break;
            case "3":
                Priority = "High";
                break;
            default:
                Priority = "";
        }

        let current_task = {
            id: Date.now(),
            text: value,
            priority: Priority,
            date: date_made,
            priority_number: priority,
        }
        setTasks([...tasks, current_task]);
        setIsformVisible(false);
        setCurrent_input_field("");
        setCurrent_priority("");
        setDate_made("");
    }

    if (!isformVisible) return null;

    return (
        // Fixed overlay that covers the entire screen
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            {/* Modal container with white background */}
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md m-4">
                {/* Header */}
                <h2 className="text-xl font-bold mb-6 text-gray-800">Add New Task</h2>

                {/* Form */}
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Task
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
                                placeholder="Enter Task"
                                name="Task"
                                value={current_input_field}
                                onChange={(e) => setCurrent_input_field(e.target.value)}
                            />
                        </label>
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Priority
                            <div>

                                <input
                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
                                    type="radio"
                                    id="low"
                                    name="priority"
                                    value="low"
                                    onClick={() => setCurrent_priority("1")}
                                />
                                <label className="ml-1" htmlFor="low">low </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="medium"
                                    name="priority"
                                    value="medium"
                                    onClick={() => setCurrent_priority("2")}
                                />
                                <label className="ml-1" htmlFor="medium">medium</label>
                            </div>
                            <div>

                                <input
                                    type="radio"
                                    id="high"
                                    name="priority"
                                    value="high"

                                    onClick={() => setCurrent_priority("3")}
                                />
                                <label className="ml-1" htmlFor="high">high</label>
                            </div>
                        </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-1">
                            Date
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
                                name="Date"
                                placeholder="Enter Date"
                                value={date_made}
                                onChange={(e) => setDate_made(e.target.value)}
                            />
                        </label>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-4 mt-6">
                        <button
                            type="button"
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                            onClick={() => setIsformVisible(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleInput(current_input_field, current_priority, date_made)}
                        >
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddEntry;

/*
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
name="Date"
placeholder="Enter Date"
value={date_made}
onChange={(e) => setDate_made(e.target.value)}
 */
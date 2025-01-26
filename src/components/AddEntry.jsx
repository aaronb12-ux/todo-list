import {useState} from "react";

function AddEntry({isformVisible, tasks, setTasks}) {


    const handleInput = (value) => {
       //create an object. The object has 3 characteristics: id, task itself, and completion status
        let current_task = {
            id: Date.now(),
            text: value,
            is_completed: false
        }

        setTasks([...tasks, current_task]);
    }

    const [inputfield, setInputfield] = useState('')

    if(isformVisible)
    {
        return (
            <div >
                <div className="flex justify-center items-center text-sm font-bold mb-2">
                    <form className="bg-white shadow-md rounded">
                        <label className="block text-gray-700 text-sm font-bold" >
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-right
                                focus:outline-none"
                                name="myInput"
                                value={inputfield}
                                onChange={(e) => setInputfield(e.target.value)}
                            />
                        </label>
                    </form>
                </div>

                <div className="flex justify-center items-center">
                     <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"   onClick={() => handleInput(inputfield)}> Add</button>
                </div>
            </div>
        )
    }

    return (
        <div className="flex justify-center items-center">

        </div>
)
}

export default AddEntry;

/*
<div className="flex justify-center items-center">
    <div className="h-12 w-7/12 bg-gray-200 text-white mb-20 rounded-lg">

    </div>
</div>
*/

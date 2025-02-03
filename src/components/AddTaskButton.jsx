function AddTaskButton({setIsformVisible}) {
//make an 'onclick' function. Once clicked, create a form as a text box to record the info. Once enterered. use setTask to set the task to the just entered task

    //create a function, that if clicked, we set
    const handleclick = () => {
        setIsformVisible(true);
    }
    return(
        <button onClick={handleclick} className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-200 pl-3 pr-3 pt-2 pb-2 mt-5 mr-[30.5%] mb-3 inline-block">
            Add Task
        </button>
        )
}

export default AddTaskButton;
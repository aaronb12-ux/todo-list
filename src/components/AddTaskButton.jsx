function AddTaskButton({setIsformVisible}) {
//make an 'onclick' function. Once clicked, create a form as a text box to record the info. Once enterered. use setTask to set the task to the just entered task

    //create a function, that if clicked, we set
    const handleclick = () => {
        setIsformVisible(true);
    }
    return(
        <button onClick={handleclick} className="bg-indigo-500 hover:bg-indigo-600 text-white pl-3 pr-3 pt-2 pb-2 rounded font-bold mt-5 mr-[30.5%] mb-3 inline-block">
            Add Task
        </button>
        )
}

export default AddTaskButton;
function ShowTasks({tasks, setTasks}) {

    const handleDelete = (id) =>
    {
        const updatedtaks = tasks.filter((task) => task.id !== id)
        setTasks(updatedtaks);
    }


    console.log(tasks);


    return (

        <div className="flex justify-center items-center gap-2">
            <ul className="cursor-pointer ">
                {tasks.map((task, index) => <li className="flex justify-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-3 "
                                                key={index} onClick={() => handleDelete(task.id)}> {task.text} </li>)}
            </ul>
        </div>


    )
}

export default ShowTasks;
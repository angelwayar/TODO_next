import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useTasks } from "@/context/TasksContext";


export const TaskCard = ({ task }) => {
    const router = useRouter();
    const { deleteTask } = useTasks();

    return (
        <div
            className="bg-gray-700 hover:bg-slate-600 cursor-pointer px-20 py-5 m-2"
            onClick={() => router.push(`/edit/${task.id}`)}
        >
            <div className="flex justify-between">
                <h1>{task.title}</h1>
                <button
                    className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex item-center"
                    onClick={(e) => {
                        e.stopPropagation();
                        deleteTask(task.id);
                        toast.success('task deleted suuccessfully');
                    }}
                >
                    Delete
                </button>
            </div>
            <p className="text-gray-300">{task.description}</p>
            <span className="text-gray-400 text-xs">{task.id}</span>
        </div>
    )
}
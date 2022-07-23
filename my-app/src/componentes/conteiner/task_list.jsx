import React from 'react';
import { Task } from '../../models/task.clase';
import { LEVELS } from '../../models/levels.enum'
import  TaskComponent from '../pure/task'




const TaskListComponent = () => {


    const defaultTask = new Task('Example', 'apellido', 'email', false, LEVELS.NORMAL);
    const changeState = (id) => {
        console.log('TODO:cambiar estado de una tarea')
    }
    
    return (
        <div>
           <div>
                <h2>your Tasks</h2>
           </div>
           <TaskComponent task={ defaultTask }></TaskComponent>
        </div>
    );
};





export default TaskListComponent;

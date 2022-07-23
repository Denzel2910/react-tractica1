import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.clase';


const TaskComponent = ({ task }) => {
    return (
        <div>
            <h3>
                Nombre: { task.name }
            </h3>
            <h3>
                Apellido: { task.apellido }
            </h3>
            <h3>
                Email: { task.email }
            </h3>
            <h3>
                Level: { task.level }
            </h3>
            <h3>
                Conexion: { task.copleted ? 'Contacto en Linea' : 'Contacto No Disponible' }
            </h3>

        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;

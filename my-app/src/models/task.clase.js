import { LEVELS } from "./levels.enum";

export class Task {
    name = '';
    apellido = '';
    email = ''
    completed = false;
    level = LEVELS.NORMAL;

    constructor(name, apellido, email, completed, level){
        this.name = name;
        this.apellido = apellido;
        this.email = email;
        this.completed = completed;
        this.level = level;
    }
}
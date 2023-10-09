import { Question } from './question';

export class Tema {
    id: number;
    name: string;
    icon: string;
    points: number;
    questions: Question[];

    constructor(id: number, name: string, icon: string, points: number, questions: Question[]) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.points = points;
        this.questions = questions;
    }
   
}
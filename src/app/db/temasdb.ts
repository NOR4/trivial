import { Tema } from '../models/tema';
import { Question } from '../models/question';

const HISTORY_QUESTIONS: Question[]  = [
    {
        question: '¿En qué año comenzó la Segunda Guerra Mundial?',
        options: ['1939', '1941', '1945', '1950'],
        correct: '1939'
    },

    {
        question: '¿Cuánto duró la Guerra de los Cien Años?',
        options: ['100', '98', '116', '101'],
        correct: '116'
    }
]

const GEOGRAPHY_QUESTIONS: Question[] = [
    {
        question: 'Where can you find Perito Moreno glaciar?',
        options: ['Argentina', 'Chile', 'Antartic', 'Finland'],
        correct:  'Argentina'
    },

    {
        question: 'What was the polish currency before euro?',
        options: ['Polish marc', 'Sloti', 'Dracma', 'Polish franc'],
        correct: 'Sloti'
    }
]

const BIOLOGY_QUESTIONS: Question[] = [
    {
        question: 'Which onew from the following elemnts has more atomic weight?',
        options: ['Hydrogen', 'Oxygen', 'Sulfur', 'Fluor'],
        correct: 'Sulfur'
    },

    {
        question: 'Which one has more warming potential?',
        options: ['CO2', 'Methane', 'Smog', 'Tropospheric ozone'],
        correct: 'Methane'
    }
]

const SPORTS_QUESTIONS: Question[] = [
    {
        question: 'Former Ballon d"Or winner Andriy Shevchenko is from which nation?',
        options: ['Belarus', 'Russia', 'Estonia', 'Ukraine'],
        correct: 'Ukraine'
    },

    {
        question: 'The 2022 World Cup was held in Qatar. Name the only other side to host the tournament without previously competing in the competition?',
        options: ['South Africa', 'Switzerland', 'Uruguay', 'Chile'],
        correct: 'South Africa'   
    }
]

export const TEMAS: Tema[] = [
    {
        id: 1,
        name: 'Geography',
        icon: 'globo.png',
        points: 0,
        questions: GEOGRAPHY_QUESTIONS

    },
    {
        id:2,
        name: 'History',
        icon: 'monumento.png',
        points: 0,
        questions: HISTORY_QUESTIONS

    },

    {
        id: 3,
        name: 'Biology',
        icon: 'biologia.png',
        points: 0,
        questions: BIOLOGY_QUESTIONS
    },
    {
        id: 4,
        name: 'Sports',
        icon: 'deportes.png',
        points: 0,
        questions: SPORTS_QUESTIONS
    }
];
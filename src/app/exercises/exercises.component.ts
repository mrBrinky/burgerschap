import {Component, OnInit} from '@angular/core';


import {ExerciseService} from '../services/exercises/exercise.service';

@Component({
    selector: 'app-exercises',
    styleUrls: ['./exercises.component.scss'],
    templateUrl: './exercises.component.html',
})

export class ExercisesComponent implements OnInit {
    exercises;

    constructor(private exerciseService: ExerciseService) {

    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.exerciseService.getHeroes().subscribe((data) => {
            this.exercises = data;
        });
    }

    selectExercise(id: number) {
        this.exerciseService.getQuestion(id).subscribe((data) => this.exercises = [data]);
    }
}

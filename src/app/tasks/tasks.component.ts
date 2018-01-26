import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Task } from '../task.interface';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css'],
    animations: [
        trigger('dialog', [
            transition('void => *', [
                style({transform: 'scale3d(.3, .3, .3)'}),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({transform: 'scale3d(.0, .0, .0)'}))
            ])
        ])
    ]
})
export class TasksComponent implements OnInit {
    tasks:Task[];
    task:Task;
    status = 'open';
    showTaskDialog = false;

    constructor(private taskService:TaskService) {
    }

    ngOnInit() {
        this.onGetTasks(this.status);
    }

    onGetTasks(status:string) {
        this.status = status;
        this.taskService.getTasks(status)
            .subscribe(
                (tasks:Task[]) => this.tasks = tasks,
                (error:Response) => console.log(error)
            )
    }

    onDelete(id:number) {
        this.taskService.deleteTask(id)
            .subscribe(
                () => this.onGetTasks(this.status), //Reload tasks
                (error:Response) => console.log(error)
            );
    }

    getTaskForm(task) {
        this.showTaskDialog = true;
        this.task = task;
    }

    closeTaskForm() {
        this.showTaskDialog = false;
    }

    onSubmit(form:NgForm) {
        if (form.value.id) {
            this.updateTask(form);
        }
        else {
            this.addTask(form);
        }

        this.closeTaskForm();
    }

    addTask(form) {
        this.taskService.addTask(form.value.title, form.value.due_date, form.controls['status'].value)
            .subscribe(
                () => this.onGetTasks(this.status), //Reload tasks
                (error:Response) => console.log(error)
            );
    }

    updateTask(form) {
        this.taskService.updateTask(form.value.id, form.value.title, form.value.due_date, form.controls['status'].value)
            .subscribe(
                () => this.onGetTasks(this.status), //Reload tasks
                (error:Response) => console.log(error)
            );
    }
}

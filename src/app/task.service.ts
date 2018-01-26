import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class TaskService {
    protected apiUrl = 'http://test.tmt/api/v1/';

    constructor(private http:Http) {
    }

    addTask(title:string, due_date:string, status:string) {
        const body = JSON.stringify({title: title, due_date: due_date, status: status});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.apiUrl + 'task', body, {headers: headers});
    }

    getTasks(status):Observable<any> {
        return this.http.get(this.apiUrl + 'tasks/' + status)
            .map(
                (response:Response) => {
                    return response.json().tasks;
                }
            );
    }

    updateTask(id:number, title:string, due_date:string, status:string) {
        const body = JSON.stringify({title: title, due_date: due_date, status: status});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put(this.apiUrl + 'task/' + id, body, {headers: headers})
            .map(
                (response:Response) => response.json()
            );
    }

    deleteTask(id:number) {
        return this.http.delete(this.apiUrl + 'task/' + id);
    }
}

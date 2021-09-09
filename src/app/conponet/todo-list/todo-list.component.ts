import {Component, Input, OnInit} from '@angular/core';
import { ListDtos } from '../../dto/list-dtos';
import { Donelistservice } from '../../service/donelistservice';
import {Router} from '@angular/router';
import {log} from 'util';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    list: ListDtos [] = [];
    @Input() listform: ListDtos = new ListDtos();
     public myDate = new Date();

    // tslint:disable-next-line:ban-types
    condate(emp: String , xdate: String): boolean{
    log(emp < xdate);
    return emp < xdate;
    }
    constructor(private donelistservice: Donelistservice, private router: Router, ) {
    }

    ngOnInit(): void {
        this.getalltask();
    }

    donelist(emp: ListDtos): void {
        this.donelistservice.deletelistservice(emp).subscribe(() => {
            this.list.splice(this.list.indexOf(emp), 1);
        });
    }
    getalltask(): void {
        this.donelistservice.getlist().subscribe(result => {
            this.list = result;
        });
    }
    addnewtask(): void {
        this.donelistservice.add(this.listform).subscribe(() => {
           this. getalltask();
        });
    }

    delettask(emp: ListDtos): void {
        this.donelistservice.delettask(emp.id).subscribe(() => {
            this.list.splice(this.list.indexOf(emp), 1);
        });
    }
}

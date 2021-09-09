import {Component, Input, OnInit} from '@angular/core';
import {ListDtos} from '../../dto/list-dtos';
import {Getlistservice} from '../../service/getlistservice';
import {Router} from '@angular/router';

@Component({
  selector: 'app-donelist',
  templateUrl: './donelist.component.html',
  styleUrls: ['./donelist.component.css']
})
export class DonelistComponent implements OnInit {
  list: ListDtos [] = [];
  @Input() listform: ListDtos = new ListDtos();

  constructor(private getlistservice: Getlistservice) { }

  ngOnInit(): void {
    this.getalltask();
  }
  getalltask(): void {
    this.getlistservice.getlist().subscribe(result => {
      this.list = result;
    });
  }

    undonetask(emp: ListDtos): void {
      this.getlistservice.undonetask(emp).subscribe(() => {
        this.list.splice(this.list.indexOf(emp), 1);
      });

    }
}

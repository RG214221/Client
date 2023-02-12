import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import Child from '../models/Child';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-one-child',
  templateUrl: './show-one-child.component.html',
  styleUrls: ['./show-one-child.component.scss']
})
export class ShowOneChildComponent implements OnInit {
  nameExist:false;
  idExist:false;
  constructor(public userSer: UserService) { }
  fnameFormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]);
  idFormControl = new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(9), Validators.minLength(9)]);
  dateFormControl = new FormControl('', [Validators.required]);
  ngOnInit() {

  }
  @Input()
  index: number;
  valid() {
    return this.fnameFormControl.valid && this.idFormControl.valid && this.dateFormControl ? true : false;
  }
  blur() {
    this.userSer.childrenValid.next(this.valid());
  }

}
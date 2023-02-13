import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-one-child',
  templateUrl: './show-one-child.component.html',
  styleUrls: ['./show-one-child.component.scss']
})
export class ShowOneChildComponent implements OnInit {
  nameExists = false;
  idExists = false;
  constructor(public userSer: UserService) { }
  fnameFormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]);
  idFormControl = new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(9), Validators.minLength(9)]);
  dateFormControl = new FormControl('', [Validators.required]);
  ngOnInit() {

  }
  @Input()
  index: number;
  valid() {
    return this.fnameFormControl.valid && this.idFormControl.valid && this.dateFormControl
      && !this.idExists && !this.nameExists
      ? true : false;
  }
  blur(e, input) {
    if (input == "id")
      this.idExists = this.userSer.userDetails.Children.find((c, i) => c.ChildIDNumber == e.target.value && i != this.index) != undefined ? true : false;
    if (input == "name")
      this.nameExists = this.userSer.userDetails.Children.find((c, i) => c.ChildName == e.target.value && i != this.index) != undefined ? true : false;
    this.userSer.childrenValid = this.valid();
  }

}

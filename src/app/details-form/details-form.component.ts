import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import Child from '../models/Child';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent implements OnInit {
  //as soon as there arent children.
  childrenValidations: boolean = true;
  fnameFormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]);
  lnameFormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]);
  idFormControl = new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(9), Validators.minLength(9)]);
  dateFormControl = new FormControl('', [Validators.required]);
  hmoFormControl = new FormControl('', [Validators.required]);
  genFormControl = new FormControl('', [Validators.required]);
  numFormControl = new FormControl('', [Validators.required, Validators.min(0)])
  constructor(public userSer: UserService, public router: Router) { }
  ngOnInit() {

  }
  valid() {
    //if there are children and they are not valid.
    this.childrenValidations = this.userSer.childrenValid;
        if (this.userSer.numOfChildren == 0)
        this.childrenValidations=true;
    if (
      this.childrenValidations &&
      //if there is any children that I didnt touch at all (not valid).
      this.userSer.userDetails.Children.every(e => e.ChildName != null) &&
      this.fnameFormControl.valid &&
      this.lnameFormControl.valid &&
      this.idFormControl.valid &&
      this.dateFormControl.valid &&
      this.hmoFormControl.valid &&
      this.genFormControl.valid &&
      this.numFormControl.valid)
      return true;
    return false;
  }

  updateChildrenArr(e) {
    if (e.target.value > 0)
      //there are children, as soon as I dont touch them,they arent valid,so there is at least one not valid child
      this.userSer.childrenValid = false;
    else
      this.childrenValidations = true;
    this.userSer.userDetails.Children = [];
    for (let i = 0; i < e.target.value; i++) {
      this.userSer.userDetails.Children[i] = new Child(null, null, null);
    }
  }
  onSubmit() {
    if (!this.valid())
      return;
    this.userSer.addUser().subscribe((succ) => {
      if (succ == null) {
        alert("There is already User with this ID number!!");
        return;
      }

      this.router.navigate(['end']);
    },
      (err) => { console.log(err); alert("There was some problem with fetching the data") });
  }
}

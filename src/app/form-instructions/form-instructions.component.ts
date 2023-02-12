import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form-instructions',
  templateUrl: './form-instructions.component.html',
  styleUrls: ['./form-instructions.component.scss']
})
export class FormInstructionsComponent {
constructor(public userSer:UserService){}
}

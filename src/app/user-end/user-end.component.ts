import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { UserService } from '../services/user.service';
import User from '../models/User';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-end',
  templateUrl: './user-end.component.html',
  styleUrls: ['./user-end.component.scss']
})
export class UserEndComponent {
  constructor(public userSer: UserService, public router: Router) { }
  fileName = 'User Details.xlsx';

  exportToExcel(): void {
    let element = [this.userSer.userDetails, this.userSer.userDetails.Children];
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(element);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'sheet 1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

  homePage() {
    this.router.navigate(['home']);
  }
  newUser() {
    this.userSer.userDetails = new User(null, null, null, [], null, null, null);
    this.userSer.childrenValid = true;
      this.userSer=null;
    this.router.navigate(['detailsForm']);
  }

}

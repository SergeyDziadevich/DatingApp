import { Component, EventEmitter, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-roles-model',
  templateUrl: './roles-model.component.html',
  styleUrls: ['./roles-model.component.scss']
})
export class RolesModelComponent implements OnInit {
  updateSelectedRoles = new EventEmitter();
  user: User;
  roles: any[];

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  updateRoles(): void {
    this.updateSelectedRoles.emit(this.roles);
    this.bsModalRef.hide();
  }

}

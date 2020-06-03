import { Vip } from './../../model/Vip';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-vip-card',
  templateUrl: './vip-card.component.html',
  styleUrls: ['./vip-card.component.css']
})

export class VipCardComponent implements OnInit {
  Vip: Vip[];
  // VipProfile: any = [ 'Athletes', 'Actors', 'Business', 'Musicians', 'Political Leaders']

  constructor(
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getVip(id);
    // this.editForm = this.fb.group({
      // name: ['', [Validators.required]],
      // occupation: ['', [Validators.required]],
      // type: ['', [Validators.required]],
      // detail: ['', [Validators.required]],
      // reason: ['', [Validators.required]],
      // yt: ['', [Validators.required]]
    // })
  }

  // Choose options with select-dropdown
  // updateProfile(e) {
  //   this.editForm.get('designation').setValue(e, {
  //     onlySelf: true
  //   })
  // }

  // Getter to access form control
  // get myForm() {
  //   return this.editForm.controls;
  // }

  getVip(id) {
    console.log(id)
    this.apiService.getVip(id).subscribe(data => {data
    });
  }



}
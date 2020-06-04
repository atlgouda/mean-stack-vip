import { Vip } from '../../model/vip';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-vip-edit',
  templateUrl: './vip-edit.component.html',
  styleUrls: ['./vip-edit.component.css']
})

export class VipEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  vipData: Vip[];
  VipProfile: any = ['Athletes', 'Actors', 'Business', 'Musicians', 'Political Leaders']
  Vip: any = [];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateVip();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getVip(id);
    this.getVipById(id);

    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      occupation: ['', [Validators.required]],
      type: ['', [Validators.required]],
      detail: ['', [Validators.required]],
      reason: ['', [Validators.required]],
      yt: ['', [Validators.required]]
    })
    // console.log(this.editForm.get('yt'))
   

  }
   

  // Choose options with select-dropdown
  // updateProfile(e) {
  //   this.editForm.get('designation').setValue(e, {
  //     onlySelf: true
  //   })
  // }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }


  getVip(id) {
    this.apiService.getVip(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        occupation: data['occupation'],
        type: 'topps61',
        detail: data['detail'],
        reason: data['reason'],
        yt: data['yt'],
      });
    });

  }

  getVipById(id) {
    this.apiService.getVip(id).subscribe(data => {
      this.Vip = data;
      console.log(this.Vip.name)
    })
  }

  updateVip() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      occupation: ['', [Validators.required]],
      type: 'topps61',
      detail: ['', [Validators.required]],
      reason: ['', [Validators.required]],
      yt: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateVip(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/vips-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
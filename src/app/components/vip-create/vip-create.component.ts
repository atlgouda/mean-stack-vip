import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-vip-create',
  templateUrl: './vip-create.component.html',
  styleUrls: ['./vip-create.component.css']
})

export class VipCreateComponent implements OnInit {
  submitted = false;
  vipForm: FormGroup;
  VipProfile:any = ['Athletes', 'Actors', 'Business', 'Musicians', 'Political Leaders']

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.vipForm = this.fb.group({
      name: ['', [Validators.required]],
      occupation: ['', [Validators.required]],
      type: 'topps61',
      detail: ['', [Validators.required]],
      reason: ['', [Validators.required]],
      yt: ['', [Validators.required]]
    })
  }

  // Choose designation with select dropdown
  // updateProfile(e){
  //   this.vipForm.get('designation').setValue(e, {
  //     onlySelf: true
  //   })
  // }

  // Getter to access form control
  get myForm() {
    return this.vipForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.vipForm.valid) {
      return false;
    } else {
      this.apiService.createVip(this.vipForm.value).subscribe(
        (res) => {
          console.log('Vip successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
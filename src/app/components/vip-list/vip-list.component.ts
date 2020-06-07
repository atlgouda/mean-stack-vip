import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-vip-list',
  templateUrl: './vip-list.component.html',
  styleUrls: ['./vip-list.component.css']
})

export class VipListComponent implements OnInit {
  
  Vip:any = [];

  constructor(private apiService: ApiService) { 
    this.readVip();
  }

  ngOnInit() {}

  readVip(){
    this.apiService.getVips().subscribe((data) => {
     this.Vip = data;
     console.log(this.Vip)
    })    
  }

  removeVip(vip) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteVip(vip._id).subscribe((data) => {
          // const indx = this.Vip.findIndex(v => v._id === vip._id);
          // this.Vip.splice(indx, 1);
          // console.log('indx')
          // console.log(indx)
          console.log('vip')
          console.log(vip)
          // console.log('vip._id')
          // console.log(vip._id)
        }
      )    
    }
  }

}
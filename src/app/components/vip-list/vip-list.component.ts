import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';



@Component({
  selector: 'app-vip-list',
  templateUrl: './vip-list.component.html',
  styleUrls: ['./vip-list.component.css']
})

export class VipListComponent implements OnInit {
  
  Vip:any = [];

  constructor( private apiService: ApiService) { 
    this.readVip();
  }

  ngOnInit() {}

  readVip(){
    this.apiService.getVips().subscribe((data) => {
     this.Vip = JSON.parse(data);
     console.log(this.Vip)
    })    
  }

  removeVip(vip, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteVip(vip._id).subscribe((data) => {
          this.Vip.splice(index, 1);
        }
      )    
    }
  }

}
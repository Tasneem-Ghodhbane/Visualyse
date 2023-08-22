import { Component, OnInit } from '@angular/core';
import { CallService } from '../call.service';


@Component({
  selector: 'app-calls-table',
  templateUrl: './calls-table.component.html',
  styleUrls: ['./calls-table.component.css']
})

export class CallsTableComponent implements OnInit{

  calls: any[] = [];

  constructor(private callService: CallService) { }

  ngOnInit(): void {
    this.callService.getItems().subscribe({
      next: (response: any) => {
        this.calls = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  deleteCall(id:number){
    this.callService.deleteItem(id).subscribe({
      next: () => { //response bch trajaalk liste des calls refreshed
        this.callService.getItems().subscribe({
          next: (response: any) => {
            this.calls = response;
          },
          error: (error) => {
            console.error(error);
          }
        });
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  deleteAllItems(){
    this.callService.deleteAllItems().subscribe({
      next: () => { //response bch trajaalk liste des calls refreshed
        this.callService.getItems().subscribe({
          next: (response: any) => {
            this.calls = response;
          },
          error: (error) => {
            console.error(error);
          }
        });
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
  
}

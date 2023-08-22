import { Component, OnInit } from '@angular/core';
import { NodeService } from '../node.service';


@Component({
  selector: 'app-nodes-table',
  templateUrl: './nodes-table.component.html',
  styleUrls: ['./nodes-table.component.css']
})

export class NodesTableComponent implements OnInit{

  nodes: any[] = [];

  constructor(private nodeService: NodeService) { }

  ngOnInit(): void {
    this.nodeService.getItems().subscribe({
      next: (response: any) => {
        this.nodes = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  delete(name:string){
    this.nodeService.deleteItem(name).subscribe({
      next: () => { //response bch trajaalk liste des nodes refreshed
        this.nodeService.getItems().subscribe({
          next: (response: any) => {
            this.nodes = response;
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
    this.nodeService.deleteAllItems().subscribe({
      next: () => { //response bch trajaalk liste des nodes refreshed
        this.nodeService.getItems().subscribe({
          next: (response: any) => {
            this.nodes = response;
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

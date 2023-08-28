import { Component } from '@angular/core';
import { NodeService } from '../node.service';
import { NgForm } from '@angular/forms';
import { MyNode } from '../MyNode';

@Component({
  selector: 'app-new-node',
  templateUrl: './new-node.component.html',
  styleUrls: ['./new-node.component.css']
})
export class NewNodeComponent {

  newNode: MyNode = { name: '', type: '' }; // Define newItem with name and type

  constructor(private nodeService: NodeService) { }

  addNode(): void {
    if (this.newNode.name.trim() && this.newNode.type.trim()) {
      this.nodeService.addItem(this.newNode).subscribe(
        () => {
          this.newNode = { name: '', type: '' }; // Clear newItem
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

}

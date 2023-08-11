import { Component } from '@angular/core';

@Component({
  selector: 'app-new-call',
  templateUrl: './new-call.component.html',
  styleUrls: ['./new-call.component.css']
})
export class NewCallComponent {

  type : string = "sync";

  // takhtaf fl methode thenya
  show: boolean = false;



  onTypeChange() {
    // Toggle properties based on type value (gonna keep the track on these properties selon type )
    this.show = this.type === 'async';

  }
//
}

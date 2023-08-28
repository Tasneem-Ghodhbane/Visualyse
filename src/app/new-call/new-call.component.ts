import { Component } from '@angular/core';
import { CallService } from '../call.service';

@Component({
  selector: 'app-new-call',
  templateUrl: './new-call.component.html',
  styleUrls: ['./new-call.component.css']
})
export class NewCallComponent {

  type : string = "sync";

  constructor(private callService: CallService) { }


  addCall(callForm: any): void {
    if (callForm.valid) {
      const formData = new FormData();
      formData.append('startPoint', callForm.value.startPoint);
      formData.append('endPoint', callForm.value.endPoint);
      formData.append('callType', callForm.value.callType);
      if(this.type=="sync"){      
        formData.append('API', callForm.value.callAPI);    }
      if(this.type=="async"){
        formData.append('topic', callForm.value.topic);
        formData.append('eventProduced', callForm.value.eventProduced);
      }
    //l oranger temchi kima postman et azre9 fetah kima html(aka partie name)
      formData.append('description', callForm.value.description);


      this.callService.addCall(formData).subscribe(
        (response) => {
          // Handle successful response if needed
          callForm.resetForm(); // Reset the form
          this.type="sync";
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }


//
}

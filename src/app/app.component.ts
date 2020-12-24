import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forms-example';
  exampleForm = new FormGroup ({
    firstName: new FormControl(),
    lastName: new FormControl(), 
    alias: new FormArray([ new FormControl("") ])
  });

  addNewAlias() {
    this.aliases.push(new FormControl(""));
  }

  get aliases() {
    return this.exampleForm.get("alias") as FormArray;
  }
}

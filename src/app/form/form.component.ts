import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  nom : string = "";
  prenom : string = "";
  adresse : string = "";
  cp : string = "";
  ville : string = "";
  tel : string = "";
  email : string = "";
  civ : string = "";
  login : string = "";
  mdp : string = "";

  isFormSubmitted = false;

  onSubmit() {
    this.isFormSubmitted = true; 
  }
}

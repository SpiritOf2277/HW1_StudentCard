import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {

  studentCard = {
    firstName: '',
    lastName: '',
    middleName: '',
    specialization: '',
    year: ''
  };

  cardGenerated = false;

  GenerateCard() {
    this.cardGenerated = true;
  }
}
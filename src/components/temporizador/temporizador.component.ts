import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-temporizador',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './temporizador.component.html',
  styleUrl: './temporizador.component.css'
})

export class TemporizadorComponent {
  buttonText: string = 'Configurar Temporizador';
  setTimerForm!: FormGroup;
  interval: any;
  remainingTime: number = 0;
  isRunning: boolean = false;

  constructor(private fb: FormBuilder) {
    this.setTimerForm = this.fb.group({
      hour: ['00', [this.numberValidation, Validators.required]],
      minute: ['00', [this.numberValidation, Validators.required]],
      second: ['00', [this.numberValidation, Validators.required]],
    });
  }

  onSubmit() {
    if (this.setTimerForm.valid) {
      const hour = this.setTimerForm.get('hour')?.value;
      const minute = this.setTimerForm.get('minute')?.value;
      const second = this.setTimerForm.get('second')?.value;

      if (hour === '00' && minute === '00' && second === '00') {
        this.formError('Por favor, complete los campos con números diferentes de cero');
        return;
      }

      this.buttonText = 'Temporizador en marcha';
      this.setTimerForm.get('hour')?.disable();
      this.setTimerForm.get('minute')?.disable();
      this.setTimerForm.get('second')?.disable();
      this.remainingTime = (parseInt(hour, 10) * 3600) + (parseInt(minute, 10) * 60) + parseInt(second, 10);

      this.timer();
      this.isRunning = true;
      this.interval = setInterval(() => { this.timer() }, 1000);
    }else {
      this.formError('Por favor, complete los campos con números de dos dígitos');
    }
  }

  formError(text: string) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text
    });
  }

  timer() {
    this.remainingTime--;

    if (this.remainingTime <= 0) {
      this.stopTimer();

      Swal.fire({
        icon: 'success',
        title: '¡Tiempo cumplido!',
        text: 'El tiempo del temporizador ha finalizado'
      });

      return;
    }

    const hour = Math.floor(this.remainingTime / 3600).toString().padStart(2, '0');
    const minute = Math.floor((this.remainingTime % 3600) / 60).toString().padStart(2, '0');
    const second = (this.remainingTime % 60).toString().padStart(2, '0');

    this.setTimerForm.setValue({
      hour: hour,
      minute: minute,
      second: second
    });
  }

  stopTimer() {
    clearInterval(this.interval);
    this.buttonText = 'Configurar Temporizador';
    this.setTimerForm.get('hour')?.enable();
    this.setTimerForm.get('minute')?.enable();
    this.setTimerForm.get('second')?.enable();
    this.isRunning = false;

    this.setTimerForm.setValue({
      hour: '00',
      minute: '00',
      second: '00'
    });
  }

  numberValidation(control: AbstractControl): ValidationErrors | null {
    const valid = /^\d+$/.test(control.value) || control.value === '';
    return valid ? null : { invalidNumber: { valid: false, text: 'Solo se permiten números' } };
  }

}

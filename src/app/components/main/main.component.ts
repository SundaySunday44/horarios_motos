import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  horario1: boolean = false;
  horariosBoolean: boolean[] = [];
  recursosDisponibles: number[] = [1,2,3,4,5,6];
  horariosAsignados =[
    {
      horario: 1, hora: '8:00 - 8:30',estado: 'Libre', recursoAsignado: 0
    },
    {
      horario: 2, hora: '9:00 - 9:30',estado: 'Libre', recursoAsignado: 0
    },
    {
      horario: 3, hora: '10:00 - 10:30',estado: 'Libre', recursoAsignado: 0
    },
    {
      horario: 4, hora: '11:00 - 11:30',estado: 'Libre', recursoAsignado: 0
    },
    {
      horario: 5, hora: '12:00 - 12:30',estado: 'Libre', recursoAsignado: 0
    },
    {
      horario: 6, hora: '13:00 - 13:30',estado: 'Libre', recursoAsignado: 0
    },
    {
      horario: 7, hora: '14:00 - 14:30',estado: 'Libre', recursoAsignado: 0
    },
    {
      horario: 8, hora: '15:00 - 15:30',estado: 'Libre', recursoAsignado: 0
    },
    {
      horario: 9, hora: '16:00 - 16:30',estado: 'Libre', recursoAsignado: 0
    },
    {
      horario: 10, hora: '17:00 - 17:30',estado: 'Libre', recursoAsignado: 0
    },
    {
      horario: 11, hora: '18:00 - 18:30',estado: 'Libre', recursoAsignado: 0
    },
    {
      horario: 12, hora: '19:00 - 19:30',estado: 'Libre', recursoAsignado: 0
    },
    {
      horario: 13, hora: '20:00 - 20:30',estado: 'Libre', recursoAsignado: 0
    },
  ]
  
  /**
   * Este método se encarga de asignar o quitar recursos a un horario dependiendo del estado que tenga.
   * Si el estado de un horario es libre se le asigna un recurso que este disponible y el recurso en cuestión es removido de los recursos disponibles.
   * Si el estado de un horario es ocupado se le quita el recurso asignado y se le agrega a los recursos disponibles.
   * @param schedule numero que hace referencia al horario que se piensa asignar
   */
  isSelected(schedule: number){
    if(this.horariosAsignados[schedule].estado == 'Libre'){
      this.horariosAsignados[schedule].recursoAsignado = this.recursosDisponibles[0];
      this.recursosDisponibles.splice(0,1);
    }
    else{
      this.recursosDisponibles.unshift(this.horariosAsignados[schedule].recursoAsignado);
      this.recursosDisponibles = this.recursosDisponibles.sort();
      this.horariosAsignados[schedule].recursoAsignado = 0;
    }
    this.horariosBoolean[schedule] = !this.horariosBoolean[schedule];
    this.horariosAsignados[schedule].estado = this.horariosBoolean[schedule] ? 'Ocupado' : 'Libre';
    console.log(this.recursosDisponibles);
  }
}

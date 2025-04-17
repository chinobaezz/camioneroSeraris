import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [FormsModule,CommonModule],
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  recibo = {
    basico: 0,
    horasExtras100: 0, // Se ingresa manualmente
    horasExtrasMonto: 0, // Se calcula automáticamente
    otrosConceptos: 0,
    adicionalRamaLogistica: 0,
    diasFeriados: 0, // Se ingresa manualmente
    feriadoMonto: 0  // Se calcula automáticamente
  };
  descuento: number = 0; // Porcentaje de descuento ingresado por el usuario
  totalRemunerativo: number = 0;
  totalDescuento: number = 0;
  resultado: number = 0;

  // Actualizar valores dinámicos
  actualizarValores() {
    this.recibo.adicionalRamaLogistica = this.recibo.basico * 0.14;
    this.recibo.feriadoMonto = (this.recibo.basico / 25) * this.recibo.diasFeriados;
    this.recibo.horasExtrasMonto = (this.recibo.basico + this.recibo.adicionalRamaLogistica) * 0.01 * this.recibo.horasExtras100;
  
  }

  calcularRecibo() {
    this.actualizarValores();

     // Calcular total remunerativo antes del descuento
     this.totalRemunerativo =
     this.recibo.basico +
     this.recibo.adicionalRamaLogistica +
     this.recibo.feriadoMonto +
     this.recibo.horasExtrasMonto;
   

  // Aplicar descuento
  this.totalDescuento = (this.totalRemunerativo * this.descuento) / 100;

  // Calcular el total neto después del descuento
  this.resultado = (this.totalRemunerativo - this.totalDescuento) +   this.recibo.otrosConceptos;


  }

}


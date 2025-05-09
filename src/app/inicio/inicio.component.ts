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
    horasExtras50: 0, // <--- NUEVO
    horasExtrasMonto: 0, // Se calcula automáticamente
    horasExtras50Monto: 0, // <--- NUEVO
    otrosConceptos: 0,
    adicionalRamaLogistica: 0,
    diasFeriados: 0, // Se ingresa manualmente
    feriadoMonto: 0  // Se calcula automáticamente
  };
  descuento: number = 0; // Porcentaje de descuento ingresado por el usuario
  totalRemunerativo: number = 0;
  totalDescuento: number = 0;
  resultado: number = 0;
  diasTrabajados: number = 0;


  // Actualizar valores dinámicos
  actualizarValores() {
    this.recibo.adicionalRamaLogistica = this.recibo.basico * 0.16;
    this.recibo.feriadoMonto = (this.recibo.basico / 25) * this.recibo.diasFeriados;
    this.recibo.horasExtrasMonto = (this.recibo.basico + this.recibo.adicionalRamaLogistica) * 0.01 * this.recibo.horasExtras100;
    this.recibo.horasExtras50Monto = (this.recibo.basico + this.recibo.adicionalRamaLogistica) * 0.0075 * this.recibo.horasExtras50;

  
  }
  //agregar la funcion ara calcular
  calcularAdicionalPorDias(): number {
    const valorPorDia = 16634.21;
    const totalBase = this.diasTrabajados * valorPorDia;
    const adicional16 = totalBase * 0.16;
    
  const adicional20 = totalBase * 0.20;
    return totalBase + adicional16 + adicional20;
  }
  

  calcularRecibo() {
    this.actualizarValores();

     // Calcular total remunerativo antes del descuento
     this.totalRemunerativo =
     this.recibo.basico +
     this.recibo.adicionalRamaLogistica +
     this.recibo.feriadoMonto + 
     this.recibo.horasExtrasMonto  +
     this.recibo.horasExtras50Monto;
    

  // Aplicar descuento
  this.totalDescuento = (this.totalRemunerativo * this.descuento) / 100;

  // Calcular el total neto después del descuento
  this.resultado = (this.totalRemunerativo - this.totalDescuento) +   this.recibo.otrosConceptos +  this.calcularAdicionalPorDias();


  }

}


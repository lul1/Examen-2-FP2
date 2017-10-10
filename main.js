class Sale {
  constructor(producto, cantidad, pu) {
    this.producto = producto; //Asignación
    this.cantidad =cantidad;
    this.pu = pu; 
  	} 

 getProducto() {
    return this.producto;
  	}
  
  getCantidad() {
    return this.cantidad;
  	}
  
  getPu() {
    return this.pu;
  	}
 
  getVenta(){
    return (this.cantidad * this.pu)
 
	 }
   getGanancia() {
    return (this.cantidad * this.pu *10) / 100;
  	}
 
  
 }

const venta1 = new Sale("1 kg de Azucar", 1, 2)
const venta2 = new Sale("Aceite", 3, 4)

console.log(`N°1 ${venta1.getProducto()}: cantidad: ${venta1.getCantidad()} / precio unitario: ${venta1.getPu()} / venta: ${venta1.getVenta()} / ganancia: ${venta1.getGanancia()}`);
console.log(`N°1 ${venta2.getProducto()}: cantidad: ${venta2.getCantidad()} / precio unitario: ${venta2.getPu()} / venta: ${venta2.getVenta()} / ganancia: ${venta2.getGanancia()}`);

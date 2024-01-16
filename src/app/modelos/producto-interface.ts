export interface ProductoInterface {
  id:BigInteger,
  codigo:string,
  descripcion:string,
  codigo_barras:string,
  referencia:string,
  grupo:string,
  vr_ult_costo:BigInteger,
  vr_precio:BigInteger,
  //ult_compra:Date,
  //ult_venta:Date,
  accion:string
}

import { Producto } from "../productos/producto";

export interface ProductoCarrito {
  id: number;
  cantidad: number;
  producto: Producto;
}

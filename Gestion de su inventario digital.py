class Inventario:
    def __init__(self):
        self.productos = {}

    def agregar_producto(self, codigo, nombre, precio, cantidad):
        if codigo not in self.productos:
            self.productos[codigo] = {
                'nombre': nombre,
                'precio': precio,
                'cantidad': cantidad
            }
            print(f"Producto '{nombre}' agregado exitosamente.")
        else:
            print("Error: El código de producto ya existe.")

    def consultar_producto(self, codigo):
        if codigo in self.productos:
            producto = self.productos[codigo]
            print(f"\nInformación del producto:")
            print(f"Código: {codigo}")
            print(f"Nombre: {producto['nombre']}")
            print(f"Precio: ${producto['precio']}")
            print(f"Cantidad: {producto['cantidad']}")
        else:
            print("Producto no encontrado.")

    def actualizar_producto(self, codigo, nombre=None, precio=None, cantidad=None):
        if codigo in self.productos:
            if nombre:
                self.productos[codigo]['nombre'] = nombre
            if precio:
                self.productos[codigo]['precio'] = precio
            if cantidad:
                self.productos[codigo]['cantidad'] = cantidad
            print("Producto actualizado exitosamente.")
        else:
            print("Producto no encontrado.")

    def eliminar_producto(self, codigo):
        if codigo in self.productos:
            del self.productos[codigo]
            print("Producto eliminado exitosamente.")
        else:
            print("Producto no encontrado.")

    def valor_total_inventario(self):
        total = sum(producto['precio'] * producto['cantidad'] 
                   for producto in self.productos.values())
        return total

def menu():
    print("\n=== SISTEMA DE GESTIÓN DE INVENTARIO ===")
    print("1. Agregar producto")
    print("2. Consultar producto")
    print("3. Actualizar producto")
    print("4. Eliminar producto")
    print("5. Ver valor total del inventario")
    print("6. Salir")

def main():
    inventario = Inventario()
    
    while True:
        menu()
        opcion = input("\nSeleccione una opción (1-6): ")
        
        if opcion == "1":
            codigo = input("Ingrese código del producto: ")
            nombre = input("Ingrese nombre del producto: ")
            try:
                precio = float(input("Ingrese precio del producto: "))
                cantidad = int(input("Ingrese cantidad del producto: "))
                inventario.agregar_producto(codigo, nombre, precio, cantidad)
            except ValueError:
                print("Error: Precio y cantidad deben ser números.")
                
        elif opcion == "2":
            codigo = input("Ingrese código del producto a consultar: ")
            inventario.consultar_producto(codigo)
            
        elif opcion == "3":
            codigo = input("Ingrese código del producto a actualizar: ")
            nombre = input("Ingrese nuevo nombre (Enter para mantener): ")
            precio = input("Ingrese nuevo precio (Enter para mantener): ")
            cantidad = input("Ingrese nueva cantidad (Enter para mantener): ")
            
            precio = float(precio) if precio else None
            cantidad = int(cantidad) if cantidad else None
            nombre = nombre if nombre else None
            
            inventario.actualizar_producto(codigo, nombre, precio, cantidad)
            
        elif opcion == "4":
            codigo = input("Ingrese código del producto a eliminar: ")
            inventario.eliminar_producto(codigo)
            
        elif opcion == "5":
            total = inventario.valor_total_inventario()
            print(f"\nValor total del inventario: ${total:,.2f}")
            
        elif opcion == "6":
            print("\n¡Gracias por usar el sistema de gestión de inventario!")
            break
            
        else:
            print("Opción no válida. Por favor, intente nuevamente.")

if __name__ == "__main__":
    main()
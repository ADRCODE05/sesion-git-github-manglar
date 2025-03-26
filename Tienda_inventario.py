class gestion_de_su_inventario_digital:
    """
    Sistema de gestion de inventario digital
    """
    def __inti__(self):
        self.productos = {}
    def agregar_productos (self, codigo, nombre, precio, cantidad):
        if codigo not in self.productos:
            self.productos[codigo]= {
                'nombre' : nombre,
                'precio' : precio,
                'cantidad' : cantidad,}
            print(f"Producto '{nombre}' agregado exitisamente.")
        else:
            print("Error: El codigo de producto ya existe.")
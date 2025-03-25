def procesar_calificaciones():
    """Calificar según las especificaciones de las notas que ingresa el usuario al programa."""

    #1: Entrada de datos por parte del usuario
    while True:
        try:
            calificacion = float(input("Ingrese una calificación numérica de (0-100): "))
            if calificacion < 0:#2: Verificamos que la entrada sean numeros mayores que cero-
                print("El numero debe ser positivo.")   #2: -y menores que cien
            elif calificacion > 100:
                print("El numero debe ser menor que 100.")
            else:
                break
        except ValueError: #3: Esta perte nos valida si introducimos un valor diferente de un numero
            print("Entrada inválida. Por favor, ingrese un número.")
   
    while True:
        try:#4: Aqui verificamos con un For in que el usuario ingrese en su lista un numero entero, "No una letras ni negativos"
            calificaciones = [float(x)for x in input("Ingrese una lista de calificaciones separadas por comas: ").split(",")]
            if any(x < 0 for x in calificaciones):#any() devuelve "True" si algún elemento de un iterable es verdadero; de lo contrario, devuelve "False" .
                print("Entrada invalida. porfavor ingrese un número positivo.")
            elif any(x > 100 for x in calificaciones):
                print("Entada invalida. Por favor, imgrese un menor que 100..")
            else:
                break
        except ValueError:
            print("Entrada invalida. Por favor, ingrese un número.")
    while True:
        try:#5: En esta parte del codigo vericamos que los datos ingresados por el usuario no sean una letra o un nuemro negativo
            comparacion = float(input("Ingrese un valor para comparar: "))
            if comparacion < 0:
                print("Entrada invalida, El numero debe ser positivo.")
            else:
                break
        except ValueError:
            print("Por favor, ingresar un número.")
   #6: Condiciones de aprobacion segun la calificacion ingresada por el usuario al programa
    if calificacion >= 70:
        print("---Con esta calificacion queda aprobado--------")
    elif calificacion <= 69:
        print("----Con esta calificacion queda reprobado-------")
    else:
        print("Recuperacion")
    #7: Realizamos la operacion que nos va a verificar el promedio
    promedio = sum(calificaciones) / len(calificaciones)
    print(f"Promedio de calificaciones: {promedio:2f}")

    #8: En esta parte del codigo se. Verifican las calificaciones mayores
    contador_mayores = 0
    i = 0
    while i < len(calificaciones):
        if calificaciones[i] > comparacion:
            contador_mayores += 1
        i += 1 #8: Usamos print() para imprimir las calificaciones mayor que.
    print(f"Calificaciones mayores que {comparacion}: {contador_mayores}")
    while True:
        try:#9: Aqui verificamos cuantas veces aparecen las calificaciones que el ingresa el usuario validando que sean numeros positivos y no negativos ni letras.
            calificacion_verificar = float(input("Ingrese una calificación para verificar: "))
            if calificacion_verificar < 0:
              print("El numero debe ser positivo.")
            else:
              break
        except ValueError:
              print("Por favor. Ingrese un número.") 
    contador_verificar= 0
    for a in calificaciones:    
        if a == calificacion_verificar:
           contador_verificar += 1
           continue #9: Con el continue saltamos a las calificaciones mayores
        elif a > calificacion_verificar:
            break  
             #9: Usamos print() para imprimir las calificaciones y cuantas veces aparecen 
    print(f"La calificación {calificacion_verificar} aparece {contador_verificar} veces.")
    print("----Muchas gracias por usar el programa-----")
#Listo es hora de llamar a nuetra funcion para ejecutar nuestro programa
procesar_calificaciones()
def Juego_piedra_papel_o_tijeras():
    """
    juego de piedra papel o tijeras
    """
    import random
    op = ['piedra',' papel','tijeras']
    print('Juego de piedra papel o tijeras')
    print('Elije una opcion')
    print('1.-piedra')
    print('2.-papel')
    print('3.-tijeras')
    opc = int(input('opcion:'))
    opc -= 1
    print('tu elejiste:' , op[opc])
    pc = random.choice(op)
    print('la pc escogio:' , pc)
    if op[opc] == pc:
        print('Empate')
    elif op[opc] == 'piedra' and pc == 'tijeras':
        print('Ganaste')
    elif op[opc] == 'papel' and pc == 'piedra':
        print('Ganaste')
    elif op[opc] == 'tijeras' and pc == 'papel':
        print('Ganaste')
    else:
        print('Perdiste')
    print('GAME OVER')
Juego_piedra_papel_o_tijeras()
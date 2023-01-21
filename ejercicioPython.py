def ingresar_matriz(filas, columnas):
    matriz = []
    for i in range(filas):
        fila = []
        for j in range(columnas):
            valor = int(input(f"Ingresa el valor para la posición {i+1},{j+1}: "))
            fila.append(valor)
        matriz.append(fila)
    return matriz

def multiplicar_matrices(matriz1, matriz2):
    filas_matriz1 = len(matriz1)
    columnas_matriz1 = len(matriz1[0])
    filas_matriz2 = len(matriz2)
    columnas_matriz2 = len(matriz2[0])
    if columnas_matriz1 != filas_matriz2:
        print("Las matrices no se pueden multiplicar")
        return None
    matriz_resultado = [[0 for j in range(columnas_matriz2)] for i in range(filas_matriz1)]
    for i in range(filas_matriz1):
        for j in range(columnas_matriz2):
            for k in range(filas_matriz2):
                matriz_resultado[i][j] += matriz1[i][k] * matriz2[k][j]
    return matriz_resultado

def imprimir_matriz(matriz):
    for i in range(len(matriz)):
        for j in range(len(matriz[i])):
            print(matriz[i][j], end="\t")
        print()

def buscar_valor(matriz, valor):
    for i in range(len(matriz)):
        for j in range(len(matriz[i])):
            if matriz[i][j] == valor:
                return (i,j)
    return None


filas1 = int(input("Ingresa el número de filas de la primera matriz: "))
columnas1 = int(input("Ingresa el número de columnas de la primera matriz: "))
matriz1 = ingresar_matriz(filas1, columnas1)
filas2 = int(input("Ingresa el número de filas de la segunda matriz: "))
columnas2 = int(input("Ingresa el número de columnas de la segunda matriz: "))
matriz2 = ingresar_matriz(filas2, columnas2)

print("Matriz 1")
imprimir_matriz(matriz1)
print("Matriz 2")
imprimir_matriz(matriz2)
resultado = multiplicar_matrices(matriz1, matriz2)
print("Matriz resultante:")
imprimir_matriz(resultado)
resultado.sort(reverse=True)
print("Matriz resultante ordenada de manera descendente:")
imprimir_matriz(resultado)
pos = buscar_valor(resultado, 9)
if pos:
    print("La matriz tiene el valor 9 y se encuentra en la posición", pos[0]+1, ",", pos[1]+1)
else:
    print("La matriz no tiene el valor 9")


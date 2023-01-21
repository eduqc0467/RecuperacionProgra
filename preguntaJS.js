function ingresarMatriz(filas, columnas) {
    let matriz = [];
    for (let i = 0; i < filas; i++) {
      let fila = [];
      for (let j = 0; j < columnas; j++) {
        let valor = parseInt(prompt(`Ingresa el valor para la posición ${i+1},${j+1}: `));
        fila.push(valor);
      }
      matriz.push(fila);
    }
    return matriz;
  }
  
  function multiplicarMatrices(matriz1, matriz2) {
    let filasMatriz1 = matriz1.length;
    let columnasMatriz1 = matriz1[0].length;
    let filasMatriz2 = matriz2.length;
    let columnasMatriz2 = matriz2[0].length;
    if (columnasMatriz1 != filasMatriz2) {
      console.log("Las matrices no se pueden multiplicar");
      return;
    }
    let matrizResultado = Array(filasMatriz1).fill(0).map(() => Array(columnasMatriz2).fill(0));
    for (let i = 0; i < filasMatriz1; i++) {
      for (let j = 0; j < columnasMatriz2; j++) {
        for (let k = 0; k < filasMatriz2; k++) {
          matrizResultado[i][j] += matriz1[i][k] * matriz2[k][j];
        }
      }
    }
    return matrizResultado;
  }
  
    function imprimirMatriz(matriz) {
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                console.log(matriz[i][j] + "\t",);
            }
        }
    }
  function buscarValor(matriz, valor) {
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] === valor) {
          return [i, j];
        }
      }
    }
    return null;
  }
  
  let filas1 = parseInt(prompt("Ingresa el número de filas de la primera matriz: "));
  let columnas1 = parseInt(prompt("Ingresa el número de columnas de la primera matriz: "));
  let matriz1 = ingresarMatriz(filas1, columnas1);
  let filas2 = parseInt(prompt("Ingresa el número de filas de la segunda matriz: "));
  let columnas2 = parseInt(prompt("Ingresa el número de columnas de la segunda matriz: "));
  let matriz2 = ingresarMatriz(filas2, columnas2);
  
  console.log("Matriz 1");
  imprimirMatriz(matriz1);
  console.log("Matriz 2");
  imprimirMatriz(matriz2);
  let resultado = multiplicarMatrices(matriz1, matriz2);
  console.log("Matriz resultante:");
  imprimirMatriz(resultado);
  resultado.sort((a, b) => b - a);
  console.log("Matriz resultante ordenada de manera descendente:");
  imprimirMatriz(resultado);
  let pos = buscarValor(resultado, 9);
  if (pos) {
    console.log(`La matriz tiene el valor 9 y se encuentra en la posición ${pos[0] + 1},${pos[1] + 1}`);
  } else {
      console.log(`La matriz no tiene el valor 9`);
  }  
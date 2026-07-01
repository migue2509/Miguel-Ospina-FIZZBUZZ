acumulador = 0
let ventas = [120000, 95000, 150000, 80000, 200000]

for (i = 0; i < ventas.length ; i++){
    acumulador += ventas[i]
}

let ventasSemana = (acumulador / ventas.length)

console.log(`El promedio de las ventas de la semana es; ${ventasSemana}`)